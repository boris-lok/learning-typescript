interface Consumed {
    name: string;
    evil: boolean;
    power: number;
}

export abstract class Horror {
    #consumed: Consumed[] = [];

    abstract readonly name: string;

    doBattle(opponent: Horror) {
        if (this.getPower() >= opponent.getPower()) {
            this.#consumed.push({
                name: opponent.name,
                evil: opponent.isEvil(),
                power: opponent.getPower(),
            });
        }
    }

    getPower() {
        return this.#consumed.reduce(
            (previous, consumed) => previous + this.getPowerFrom(consumed),
            this.#consumed.length
        );
    }

    abstract getPowerFrom(consumed: Consumed): number;
    abstract isEvil(): boolean;
}

export class Demon extends Horror {
    readonly name = 'Demon';

    getPowerFrom(consumed: Consumed): number {
        return consumed.evil ? consumed.power / 2 : consumed.power * 2;
    }

    isEvil(): boolean {
        return true;
    }
}

export class Sorcerer extends Horror {
    readonly name: string;
    #evil: boolean;

    constructor(name: string, evil: boolean) {
        super();
        this.name = name;
        this.#evil = evil;
    }

    getPowerFrom(consumed: Consumed): number {
        return consumed.evil === this.#evil
            ? consumed.power * 2
            : consumed.power;
    }

    isEvil(): boolean {
        return this.#evil;
    }
}
