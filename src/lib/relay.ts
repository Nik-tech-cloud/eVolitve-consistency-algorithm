import type { Prisma } from "prisma-client";
import { db } from "$lib/db";
import { sha256 } from "$lib/certs";
import { VOTE_GROUP_SIZE, SEARCH_TIMEOUT_SECS } from "$lib/config";

export type RelayBody =
    { type: "search"; }
    | { type: "poll"; body: any; };

export type RelayMsg = {
    uid: string;
    body: RelayBody;
};

export type RelayReplyGroupUpdate = {
    type: "count";
    newCount: number;
};

export type RelayReplyMessage = {
    type: "message";
    from: string;
    body?: any;
};

export type RelayReplyContent = RelayReplyGroupUpdate | RelayReplyMessage;

export type RelayReplyPoll = {
    status: "ok",
    newMessages: RelayReplyContent[]
} | { status: "unregistered" };

async function enqueueMessage(uid: string, message: RelayReplyContent, db: Prisma.TransactionClient) {
    await db.relayClientMessage.create({
        data: {
            clientId: uid,
            message: JSON.stringify(message)
        }
    });
}

async function msgGroupUpdate(gid: number, db: Prisma.TransactionClient, ignoreUid: string | null = null) {
    const clients = await db.relayClient.findMany({
        where: {
            groupId: gid
        }
    });
    if (clients.length > 0) {
        const msg: RelayReplyGroupUpdate = {
            type: "count",
            newCount: clients.length
        };
        for (const client of clients) {
            if (client.id == ignoreUid) continue;
            await enqueueMessage(client.id, msg, db);
        }
    } else {
        await db.relayGroup.deleteMany({
            where: {
                id: gid
            }
        });
    }
}

export async function handleSearch(msg: RelayMsg) {
    await db.$transaction(async db => {
        const { groupId } = await db.relayClient.upsert({
            create: {
                id: msg.uid
            },
            where: {
                id: msg.uid
            },
            update: {
                lastPing: new Date(),
            },
            select: {
                groupId: true
            }
        });
        if (groupId != null) {
            await db.relayClient.update({
                where: {
                    id: msg.uid
                },
                data: {
                    groupId: null
                }
            });
            await db.relayClientMessage.deleteMany({
                where: {
                    clientId: msg.uid
                }
            });
            await msgGroupUpdate(groupId, db);
        }
        const candidateGroupIds = await db.relayClient.groupBy({
            by: ["groupId"],
            having: {
                id: {
                    _count: {
                        lte: VOTE_GROUP_SIZE
                    }
                }
            },
            where: {
                lastPing: {
                    gte: new Date(Date.now() - SEARCH_TIMEOUT_SECS * 3000)
                },
                groupId: {
                    not: null
                }
            },
            orderBy: {
                _count: {
                    id: "desc"
                }
            },
            take: 1
        });
        let candidateGroupId: number;
        console.log(candidateGroupIds);
        if (candidateGroupIds.length > 0 && candidateGroupIds[0].groupId != null)
            candidateGroupId = candidateGroupIds[0].groupId;
        else {
            const { id } = await db.relayGroup.create({
                data: {},
                select: {
                    id: true
                }
            });
            candidateGroupId = id;
        }
        await db.relayClient.update({
            where: {
                id: msg.uid
            },
            data: {
                groupId: candidateGroupId
            }
        });
        await msgGroupUpdate(candidateGroupId, db);
    });
}

export async function handlePoll(msg: RelayMsg): Promise<RelayReplyPoll> {
    if (msg.body.type != "poll") throw new Error();
    return await db.$transaction(async db => {
        const clientInfo = await db.relayClient.findFirst({
            where: {
                id: msg.uid
            },
            select: {
                group: {
                    select: {
                        id: true,
                        clients: {
                            select: {
                                id: true
                            }
                        }
                    }
                },
                messages: {
                    select: {
                        message: true
                    }
                }
            }
        });
        if (clientInfo?.group == null) return { status: "unregistered" } as RelayReplyPoll;
        await db.relayClientMessage.deleteMany({
            where: {
                clientId: msg.uid
            }
        });
        await db.relayClient.update({
            where: {
                id: msg.uid
            },
            data: {
                lastPing: new Date()
            }
        });
        if (msg.body.type != "poll") throw new Error();
        if (msg.body.body !== undefined) {
            for (const { id } of clientInfo.group.clients) {
                if (id != msg.uid) await enqueueMessage(id, {
                    type: "message",
                    from: sha256(msg.uid),
                    body: msg.body.body
                }, db);
            }
        }
        return {
            status: "ok",
            newMessages: clientInfo.messages.map(m => JSON.parse(m.message))
        } as RelayReplyPoll;
    });
}

export async function cleanupDatabase() {
    await db.$transaction(async db => {
        const clientsToDelete = await db.relayClient.findMany({
            where: {
                lastPing: {
                    lt: new Date(Date.now() - SEARCH_TIMEOUT_SECS * 1000)
                }
            },
            select: {
                id: true,
                groupId: true
            }
        });
        await db.relayClient.deleteMany({
            where: {
                id: {
                    in: clientsToDelete.map(c => c.id)
                }
            }
        });
        await db.relayGroup.deleteMany({
            where: {
                clients: {
                    none: {}
                }
            }
        });
        const gidSet = new Set(clientsToDelete.filter(c => c.groupId != null).map(c => c.groupId)) as Set<number>;
        for (const gid of gidSet) {
            await msgGroupUpdate(gid, db);
        }
    });
}