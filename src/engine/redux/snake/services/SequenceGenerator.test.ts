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
    });

    function* randomGenerator() {
        yield 0.23964912334176103;
        yield 0.4221318771794387;
        yield 0.7317617458221114;
        yield 0.9503132062240779;
        throw new Error("Defect in test - exhausted random number");
    }
});