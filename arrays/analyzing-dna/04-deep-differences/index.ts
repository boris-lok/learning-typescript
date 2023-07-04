import { shallowDifferences } from '../02-shallow-differences';

export function deepDifferences(a: string[][], b: string[][]) {
    if (a.length != b.length) {
        return;
    }

    const res: ((string | undefined)[] | undefined)[] = [];

    for (let i = 0; i < a.length; i++) {
        res.push(shallowDifferences(a[i], b[i]));
    }

    return res;
}
