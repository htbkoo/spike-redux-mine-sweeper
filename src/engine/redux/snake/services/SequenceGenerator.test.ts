import {RandomIntegerSequenceGenerator} from "./SequenceGenerator";

describe('SequenceGenerator', function () {
    describe('RandomIntegerSequenceGenerator', () => {
        [
            {config: {start: 0, end: 10, length: 0}, expected: []},
            {config: {start: 0, end: 10, length: 1}, expected: [2,]},
            {config: {start: 0, end: 10, length: 2}, expected: [2, 4,]},
            {config: {start: 0, end: 10, length: 3}, expected: [2, 4, 7]},
            {config: {start: 0, end: 10, length: 3, skip: []}, expected: [2, 4, 7]},
            {config: {start: 0, end: 10, length: 3, skip: [2]}, expected: [3, 5, 8]},
            {config: {start: 0, end: 10, length: 3, skip: [2, 3]}, expected: [1, 5, 8]},
            {config: {start: 0, end: 3, length: 3}, expected: [0, 1, 2,]},
            {config: {start: 0, end: 4, length: 4}, expected: [0, 2, 3, 1]},
        ].forEach(({config, expected}) =>
            it(`should generate sequence for ${JSON.stringify(config)}`, () => {
                // given
                const source = randomGenerator();
                const generator = new RandomIntegerSequenceGenerator({
                    random: () => source.next().value
                });

                // when
                const numbers = generator.generate(config);

                // then
                return expect(numbers).toEqual(expected);
            })
        );

        it('should generate distinct sequence even if random numbers are the same', () => {
            // given
            const generator = new RandomIntegerSequenceGenerator({random: () => 0});

            // when
            const numbers = generator.generate({start: 0, end: 10, length: 3});

            // then
            return expect(numbers).toEqual([0, 1, 2]);
        });

        // todo: add check for skip
        [
            {
                scenario: "length is out of range",
                config: {
                    start: 0,
                    end: 10,
                    length: 11
                },
                errorMessage: "Invalid length, expected at most <10> but got <11>"
            },
            {
                scenario: "no enough candidates after skip",
                config: {
                    start: 0,
                    end: 10,
                    length: 10,
                    skip: [1]
                },
                errorMessage: "Invalid length, expected at most <9> but got <10>"
            },
        ].forEach(({config, errorMessage, scenario}) =>
            it(`should throw exception if ${scenario}`, () => {
                // given
                const generator = new RandomIntegerSequenceGenerator({
                    random: () => {
                        throw new Error("Should not reach here");
                    }
                });

                // when
                // then
                return expect(() => generator.generate(config)).toThrow(errorMessage);
            })
        );
    });

    function* randomGenerator() {
        yield 0.23964912334176103;
        yield 0.4221318771794387;
        yield 0.7317617458221114;
        yield 0.9503132062240779;
        throw new Error("Defect in test - exhausted random number");
    }
});