export type SmallPetFood =
    | 'bugs'
    | 'fruits'
    | 'insects'
    | 'plants'
    | 'seeds'
    | 'vegetables';

abstract class SmallFurryPet {
    readonly species: string;
    protected happiness = 0;

    constructor(species: string) {
        this.species = species;
    }

    abstract eats(food: SmallPetFood): boolean;

    isHappy() {
        return this.happiness > 0;
    }
}

export class Gerbil extends SmallFurryPet {
    constructor() {
        super('Gerbil');
    }

    /**
     * `eats`: returns whether the food is one of: `insects`, `plants`, `seeds` or `vegetables`
     */
    eats(food: SmallPetFood): boolean {
        switch (food) {
            case 'insects':
            case 'plants':
            case 'seeds':
            case 'vegetables':
                return true;
            default:
                return false;
        }
    }

    /**
     * `dig`: A method that increases happiness by `1`
     */
    dig() {
        this.happiness += 1;
    }
}

export class Hamster extends SmallFurryPet {
    constructor() {
        super('Hamster');
    }

    /**
     * `eats`: returns `true`, always
     */
    eats() {
        return true;
    }

    /**
     * `run`: A method that increases happiness by `1`
     */
    run() {
        this.happiness += 1;
    }
}
