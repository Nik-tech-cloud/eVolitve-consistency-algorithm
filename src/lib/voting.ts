import { objToSignedVote, sha256, sign, signedVoteToObj, signVote, verifyVote, type SignedVote, type SignedVoteCollection, type signedVoteCollectionToObj, type VerifyResult, type Vote } from "$lib/certs";
import { VOTE_GROUP_SIZE } from "$lib/config";
import type { RelayReplyPoll } from "$lib/relay";
import { pki } from "node-forge";

export type OnCompletion = {
    votes: Vote[];
    signatures: {
        signature: string,
        certChain: pki.Certificate[]
    }[];
};

export interface VotingOptions {
    vote: Vote;
    keys: VerifyResult;
    trusted: pki.Certificate;
    uid: string;
    relay: {
        search(): Promise<void>;
        poll(content?: any): Promise<RelayReplyPoll>;
    };
    timeouts: {
        wait: number;
        gather: number;
        sign: number;
    };
    onCompletion(obj: OnCompletion): void;
}

type VotingState = {
    state: "search"
} | {
    state: "wait",
    timeout: number,
} | {
    state: "gather",
    sent: boolean,
    votes: Record<string, SignedVote>;
    timeout: number,
} | {
    state: "sign",
    sent: boolean,
    votes: Vote[],
    signatures: Record<string, {
        signature: string,
        certChain: pki.Certificate[]
    }>,
    timeout: number
} | {
    state: "done"
};

type RelayedMessage = {
    type: "signedvote";
    signedVote: ReturnType<typeof signedVoteToObj>
} | {
    type: "signedvotecollection",
    vc: {
        signature: string,
        certChain: string[]
    }
};

export class Voting {
    #options: VotingOptions;
    #state: VotingState = { state: "search" };

    constructor(options: VotingOptions) {
        this.#options = options;
    }

    async relayTick() {
        if (this.#state.state == "search") {
            await this.#options.relay.search();
            this.#stateWait();
        } else if (this.#state.state == "wait") {
            if (this.#state.timeout > this.#options.timeouts.wait) {
                this.#stateSearch();
                return;
            } else this.#state.timeout += 1;
            await this.#poll();
        } else if (this.#state.state == "gather") {
            if (this.#state.timeout > this.#options.timeouts.gather) {
                this.#stateSearch();
                return;
            } else this.#state.timeout += 1;
            if (!this.#state.sent) {
                const signedVote = signVote(this.#options.vote, this.#options.keys);
                this.#state.votes[sha256(this.#options.uid)] = signedVote;
                this.#state.sent = true;
                await this.#poll({
                    type: "signedvote",
                    signedVote: signedVoteToObj(signedVote)
                });
            } else {
                await this.#poll();
            }
        } else if (this.#state.state == "sign") {
            if (this.#state.timeout > this.#options.timeouts.sign) {
                this.#stateSearch();
                return;
            } else this.#state.timeout += 1;
            if (!this.#state.sent) {
                const signature = {
                    signature: sign(JSON.stringify(this.#state.votes), this.#options.keys.keyPair.privateKey),
                    certChain: this.#options.keys.certChain
                };
                this.#state.signatures[sha256(this.#options.uid)] = signature;
                this.#state.sent = true;
                await this.#poll({
                    type: "signedvotecollection",
                    vc: {
                        signature: signature.signature,
                        certChain: signature.certChain.map(c => pki.certificateToPem(c))
                    }
                })
            } else {
                await this.#poll();
            }
        }
    }

    #stateSearch() {
        this.#state = {
            state: "search"
        };
    }

    #stateWait() {
        this.#state = {
            state: "wait",
            timeout: 0
        };
    }

    #stateGather() {
        this.#state = {
            state: "gather",
            sent: false,
            votes: {},
            timeout: 0,
        };
    }

    #stateSign() {
        if (this.#state.state != "gather" || Object.keys(this.#state.votes).length != VOTE_GROUP_SIZE)
            throw new Error("Invalid stateSign call");
        const stateVotes = this.#state.votes;
        let votes: Vote[] = [];
        Object.keys(stateVotes).sort().forEach(k => {
            votes.push(stateVotes[k].vote);
        });
        this.#state = {
            state: "sign",
            sent: false,
            votes,
            signatures: {},
            timeout: 0
        };
    }

    #stateOver() {
        if (this.#state.state != "sign") return;
        this.#options.onCompletion({
            signatures: Object.values(this.#state.signatures),
            votes: this.#state.votes
        });
        this.#state = { state: "done" };
    }

    async #poll(message?: RelayedMessage) {
        await this.#handleIncoming(await this.#options.relay.poll(message));
    }

    // todo: prevent DoS
    async #handleIncoming(message: RelayReplyPoll) {
        if (message.status == "unregistered") {
            this.#state = { state: "search" };
            return;
        }
        for (const msg of message.newMessages) {
            if (this.#state.state == "search") { }
            else if (this.#state.state == "wait") {
                if (msg.type == "count" && msg.newCount == VOTE_GROUP_SIZE) {
                    this.#stateGather();
                    continue;
                }
            } else if (this.#state.state == "gather") {
                if (msg.type == "count") {
                    this.#stateWait();
                    continue;
                }
                const body: RelayedMessage = msg.body;
                if (body.type != "signedvote") continue;
                this.#state.votes[msg.from] = objToSignedVote(body.signedVote);
                if (Object.keys(this.#state.votes).length == VOTE_GROUP_SIZE) {
                    this.#stateSign();
                    continue;
                }
            } else if (this.#state.state == "sign") {
                if (msg.type == "count") {
                    this.#stateWait();
                    continue;
                }
                const body: RelayedMessage = msg.body;
                if (body.type != "signedvotecollection") continue;
                this.#state.signatures[msg.from] = {
                    signature: body.vc.signature,
                    certChain: body.vc.certChain.map(p => pki.certificateFromPem(p))
                }
                if (Object.keys(this.#state.signatures).length == VOTE_GROUP_SIZE) {
                    this.#stateOver();
                    return;
                }
            }
        }
    }
}