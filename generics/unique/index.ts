export function unique<TItem>(...items: TItem[][]) {
    const res = new Set<TItem>();

    for (const row of items) {
        for (const data of row) {
            res.add(data);
        }
    }

    return Array.from(res);
}
