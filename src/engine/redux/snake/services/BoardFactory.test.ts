import {RandomBoardFactory} from "./BoardFactory";
import {Cells} from "../models/Cell";

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
            {
                cells: [
                    [Cells.MINE, Cells.EMPTY, Cells.EMPTY, Cells.EMPTY, Cells.EMPTY,],
                    [Cells.EMPTY, Cells.EMPTY, Cells.EMPTY, Cells.MINE, Cells.MINE,],
                ],
                meta: {size: {h: 2, w: 5}, numBomb: 3}
            }
        );
    });
});