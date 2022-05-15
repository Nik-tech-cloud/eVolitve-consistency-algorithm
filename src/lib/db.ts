import { PrismaClient } from "prisma-client";
import { resolve } from "path";

export const db = new PrismaClient({
    datasources: {
        db: {
            url: "file:" + resolve("prisma/dev.db")
        }
    }
});
