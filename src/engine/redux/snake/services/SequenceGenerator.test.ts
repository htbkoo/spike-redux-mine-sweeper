import {RandomIntegerSequenceGenerator} from "./SequenceGenerator";

describe('SequenceGenerator', function () {
    describe('RandomIntegerSequenceGenerator', () => {
        it('should generate sequence ', () => {
            // given
            const source = randomGenerator();
            const generator = new RandomIntegerSequenceGenerator({
                random: () => source.next().value
            });

            // when
            const numbers = generator.generate({start: 0, end: 10, length: 3});

            // then
            return expect(numbers).toEqual([2, 4, 7]);
        });

        it('should generate distinct sequence even if random numbers are the same', () => {
            // given
            const generator = new RandomIntegerSequenceGenerator({random: () => 0});

            // when
            const numbers = generator.generate({start: 0, end: 10, length: 3});

            // then
            return expect(numbers).toEqual([0, 1, 2]);
        });

        it('should throw exception if length is out of range', () => {
            // given
            const generator = new RandomIntegerSequenceGenerator({
                random: () => {
                    throw new Error("Should not reach here");
                }
            });

            // when
            // then
            return expect(() => generator.generate({start: 0, end: 10, length: 11})).toThrow("Invalid length, expected at most <10> but got <11>");
        });
    });

    function* randomGenerator() {
        yield 0.23964912334176103;
        yield 0.4221318771794387;
        yield 0.7317617458221114;
        yield 0.9503132062240779;
        throw new Error("Defect in test - exhausted random number");
    }
});