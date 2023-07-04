import { shallowEquality } from '../01-shallow-equality';

export function deepEquality(a: string[][], b: string[][]) {
    if (a.length != b.length) {
        return false;
    }

    for (let i = 0; i < a.length; i++) {
        if (!shallowEquality(a[i], b[i])) {
            return false;
        }
    }

    return true;
}
