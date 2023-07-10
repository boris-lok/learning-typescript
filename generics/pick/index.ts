export function pick<TItem, Key extends keyof TItem>(items: TItem, key: Key) {
    return items[key];
}
