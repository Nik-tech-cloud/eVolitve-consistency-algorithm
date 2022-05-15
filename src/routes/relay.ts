import type { RequestHandler } from "./relay.d";
import { type RelayMsg, handleSearch, handlePoll } from "$lib/relay";


export const post: RequestHandler = async ({ request }) => {
    const msg: RelayMsg = await request.json();
    if (msg.body.type == "search") await handleSearch(msg);
    if (msg.body.type == "poll") return {
        body: await handlePoll(msg)
    };
    return {};
};
