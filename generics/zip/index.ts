export function zip<TItem, UItem>(a: TItem[], b: UItem[]) {
    const res: (TItem | UItem)[] = [];

    const minLen = Math.min(a.length, b.length);
    let idx = 0;

    for (; idx < minLen; idx++) {
        res.push(a[idx]);
        res.push(b[idx]);
    }

    const remain = a.length > b.length ? a : b;
    for (; idx < remain.length; idx++) {
        res.push(remain[idx]);
    }

    return res;
}
