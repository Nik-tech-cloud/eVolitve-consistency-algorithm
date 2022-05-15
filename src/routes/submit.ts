import type { RequestHandler } from "./submit.d";

export const post: RequestHandler = async ({ request }) => {
    console.log(await request.json());
    return {};
}