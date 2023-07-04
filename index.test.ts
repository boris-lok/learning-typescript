import { describe, expect, test } from '@jest/globals';

import { shallowEquality } from '.';

describe('shallowEquality', () => {
    test.each([
        [[], [], true],
        [['a'], [], false],
        [[], ['a'], false],
        [['a'], ['a'], true],
        [['a', 'c'], ['a', 'c'], true],
        [['a', 'c'], ['c', 'a'], false],
        [['a', 'c'], ['a', 'a'], false],
        [['a', 'c', 'g', 't'], ['a', 'c', 'g', 't'], true],
    ])('%j %j', (a, b, res) => {
        expect(shallowEquality(a, b)).toBe(res);
    });
});
