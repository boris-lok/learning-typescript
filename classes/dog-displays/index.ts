export interface PuppyInTheWindow {
    readonly colors: string[];
    readonly furriness: number;
    readonly owner?: string | undefined;
}

export class Puppy implements PuppyInTheWindow {
    colors: string[];
    furriness: number;
    owner?: string | undefined;

    constructor(colors: string[], furriness: number) {
        this.colors = colors;
        this.furriness = furriness;
    }

    /**
     * `adopt`: Takes a new `owner` string as a parameter and sets it as the `owner` property
     */
    public adopt(owner: string) {
        this.owner = owner;
    }
}
