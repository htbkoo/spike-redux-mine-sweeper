import {RandomBoardFactory} from "./BoardFactory";
import {Cell} from "../models/Cell";

describe('BoardFactory', function () {
    it('should create new board', () => {
        // given
        const mockSequenceGenerator = {
            generate() {
                return [0, 8, 9];
            }
        };

        const factory = new RandomBoardFactory({sequenceGenerator: mockSequenceGenerator});

        // when
        const board = factory.createBoard({h: 2, w: 5, numBomb: 3});

        // then
        return expect(board).toEqual(
            [
                [Cell.MINE, Cell.EMPTY, Cell.EMPTY, Cell.EMPTY, Cell.EMPTY,],
                [Cell.EMPTY, Cell.EMPTY, Cell.EMPTY, Cell.MINE, Cell.MINE,],
            ]
        );
    });
});