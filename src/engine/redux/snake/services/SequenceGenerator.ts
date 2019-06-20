export interface SequenceGenerator<T> {
    generate(config: { start: number, end: number, length: number }): Array<T>
}

export class RandomIntegerSequenceGenerator implements SequenceGenerator<number> {
    generate(config: { start: number; end: number; length: number }): Array<number> {
        throw new Error("Not implemented");
    }
}
