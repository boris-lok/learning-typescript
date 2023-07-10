export type Buried<T> = Buried<T>[] | NextArea<T> | Treasure<T>;

export type NextArea<T> = Catacomb<T> | TunnelSystem<T>;

export interface Treasure<T> {
    content: T;
    type: 'treasure';
}

export interface Catacomb<T> {
    inside: Buried<T>;
    type: 'catacomb';
}

export interface TunnelSystem<T> {
    entrances: Buried<T>[];
    type: 'tunnels';
}

export function collectTreasure<
    Content,
    TFake extends Content,
    TReal extends Content
>(
    buried: Buried<Content>,
    isFake: (item: Content) => item is TFake,
    isReal: (item: Content) => item is TReal
) {
    const fake: TFake[] = [];
    const real: TReal[] = [];
    const scrap: Content[] = [];

    function recurse(data: Buried<Content>) {
        const collected = collectTreasure(data, isFake, isReal);

        fake.push(...collected.fake);
        real.push(...collected.real);
        scrap.push(...collected.scrap);
    }

    if (buried instanceof Array) {
        for (const data of buried) {
            recurse(data);
        }
    } else {
        switch (buried.type) {
            case 'treasure':
                if (isFake(buried.content)) {
                    fake.push(buried.content);
                } else if (isReal(buried.content)) {
                    real.push(buried.content);
                } else {
                    scrap.push(buried.content);
                }
                break;

            case 'tunnels':
                for (const entrance of buried.entrances) {
                    recurse(entrance);
                }
                break;

            case 'catacomb':
                recurse(buried.inside);
                break;
        }
    }

    return { fake, real, scrap };
}
