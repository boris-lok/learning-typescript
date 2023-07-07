import { describe, expect, it } from '@jest/globals';
import { expectType } from 'tsd';

import { getArtifactType, ArtifactName } from '.';

describe(getArtifactType, () => {
    describe('type', () => {
        it('is a union of literals', () => {
            const type = getArtifactType('Black Garnet' as ArtifactName);

            expectType<'device' | 'fortress' | 'magic' | 'sword'>(type);
        });
    });

    describe('return', () => {
        it.each<[string, ArtifactName]>([
            ['magic', 'Black Garnet'],
            ['fortress', 'Castle TypeScript'],
            ['device', 'Cosmic Key'],
            ['sword', 'Power Sword'],
            ['magic', 'Starseed'],
            ['sword', 'Sword of the Ancients'],
        ])('returns %j when the name is %j', (expected, name) => {
            expect(getArtifactType(name)).toBe(expected);
        });
    });
});
