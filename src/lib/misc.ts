export function urlQueryParams(url: URL): Record<string, string> {
    const ret: Record<string, string> = {};
    url.searchParams.forEach((v, k) => {
        ret[k] = v;
    });
    return ret;
}