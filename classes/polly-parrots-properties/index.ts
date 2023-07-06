export class Parrot {
    #name: string;
    #phrases: string[];

    constructor(name: string) {
        this.#name = name;
        this.#phrases = [`${this.#name} wants a cracker!`];
    }

    /**
     * `announce`: Returns a string in the format `"Squawk! I'm #name!"` (e.g. `"Squawk! I'm Polly!"`)
     */
    public announce() {
        return `Squawk! I'm ${this.#name}!`;
    }

    /**
     * `learn`: Takes in a string and adds it to the internal `#phrases` member
     */
    public learn(phrase: string) {
        this.#phrases.push(phrase);
    }

    /**
     * `speak`: Returns a random phrase from the internal `#phrases` member
     */
    public speak() {
        const idx = Math.floor(Math.random() * this.#phrases.length);
        return this.#phrases[idx];
    }
}
