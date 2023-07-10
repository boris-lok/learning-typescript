export function pickMany<TItem, Key extends keyof TItem>(
    items: TItem,
    keys: Key[]
) {
    const res: TItem[Key][] = [];

    for (const key of keys) {
        res.push(items[key]);
    }
    return res;
}
