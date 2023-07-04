export function shallowDifferences(a: string[], b: string[]) {
    if (a.length != b.length) {
        return undefined;
    }

    const res: (string | undefined)[] = [];

    for (let i = 0; i < a.length; i++) {
        res.push(a[i] === b[i] ? a[i] : undefined);
    }

    return res;
}
