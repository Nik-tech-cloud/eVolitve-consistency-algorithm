import { cleanupDatabase } from "$lib/relay";
import { SEARCH_CLEANUP_INTERVAL } from "$lib/config";

setInterval(cleanupDatabase, 1000 * SEARCH_CLEANUP_INTERVAL);