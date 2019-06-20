import _ from "lodash";

export interface SequenceGenerator<T> {
    generate(config: { start: number, end: number, length: number }): Array<T>
}

export class RandomIntegerSequenceGenerator implements SequenceGenerator<number> {
    public static readonly DEFAULT: RandomIntegerSequenceGenerator = new RandomIntegerSequenceGenerator({
        random: Math.random
    });

    private readonly random: () => number;

    constructor({random}: { random: () => number }) {
        this.random = random;
    }

    generate({start, end, length,}: { start: number; end: number; length: number }): Array<number> {
        const candidates = _.range(start, end);

        return _.range(0, length).map(() => candidates.splice(this.getRandomInt(0, candidates.length), 1)[0]);
    }

    // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
    private getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(this.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
}
