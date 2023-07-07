import { describe, expect, it, test } from '@jest/globals';
import { expectType } from 'tsd';

import { duel, Fighter, Character } from '.';

describe(duel, () => {
    describe('types', () => {
        test('function type', () => {
            expectType<
                (
                    good: Fighter,
                    bad: Fighter
                ) => readonly ['hero' | 'villain', Character]
            >(duel);
        });
    });

    const human: Fighter = {
        mutations: [],
        name: 'Human',
    };

    const patsy: Fighter = {
        // Lowers toughness by a great deal
        mutations: ['wings', 'wings', 'wings'],
        name: 'Patsy',
    };

    describe('duel', () => {
        it('returns the hero when their computed power is greater', () => {
            const actual = duel(human, patsy);

            expect(actual).toEqual([
                'hero',
                {
                    flying: false,
                    name: 'Human',
                    power: 1,
                    toughness: 1,
                },
            ]);
        });

        it('returns the villain when their computed power is greater', () => {
            const actual = duel(patsy, human);

            expect(actual).toEqual([
                'villain',
                {
                    flying: false,
                    name: 'Human',
                    power: 1,
                    toughness: 1,
                },
            ]);
        });

        describe('mutations', () => {
            test.each<[Fighter, Character]>([
                [
                    {
                        mutations: [],
                        name: 'Hero',
                    },
                    {
                        flying: false,
                        name: 'Hero',
                        power: 1,
                        toughness: 1,
                    },
                ],
                [
                    {
                        mutations: ['energy'],
                        name: 'Hero',
                    },
                    {
                        flying: true,
                        name: 'Hero',
                        power: 1.25,
                        toughness: 1,
                    },
                ],
                [
                    {
                        mutations: ['healing'],
                        name: 'Hero',
                    },
                    {
                        flying: false,
                        name: 'Hero',
                        power: 1,
                        toughness: 2,
                    },
                ],
                [
                    {
                        mutations: ['luck'],
                        name: 'Hero',
                    },
                    {
                        flying: false,
                        name: 'Hero',
                        power: 1.25,
                        toughness: 1.25,
                    },
                ],
                [
                    {
                        mutations: ['flight'],
                        name: 'Hero',
                    },
                    {
                        flying: true,
                        name: 'Hero',
                        power: 1,
                        toughness: 1,
                    },
                ],
                [
                    {
                        mutations: ['strength'],
                        name: 'Hero',
                    },
                    {
                        flying: false,
                        name: 'Hero',
                        power: 2,
                        toughness: 1,
                    },
                ],
                [
                    {
                        mutations: ['wings'],
                        name: 'Hero',
                    },
                    {
                        flying: true,
                        name: 'Hero',
                        power: 1,
                        toughness: 0.9,
                    },
                ],
                [
                    {
                        mutations: ['energy', 'strength'],
                        name: 'Hero',
                    },
                    {
                        flying: true,
                        name: 'Hero',
                        power: 2.5,
                        toughness: 1,
                    },
                ],
                [
                    {
                        mutations: ['energy', 'luck', 'strength'],
                        name: 'Hero',
                    },
                    {
                        flying: true,
                        name: 'Hero',
                        power: 3.125,
                        toughness: 1.25,
                    },
                ],
            ])('%j results in %o', (fighter, character) => {
                expect(duel(fighter, patsy)[1]).toEqual(
                    expect.objectContaining(character as any)
                );
            });
        });
    });
});
