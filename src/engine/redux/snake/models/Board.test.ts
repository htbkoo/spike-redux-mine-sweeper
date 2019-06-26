import {Board} from "./Board";
import {Cell} from "./Cell";

describe('Board', function () {
    it('should create blank board', () => {
        // given

        // when
        const board = Board.newBlank({h: 2, w: 4});

        // then
        return expect(board).toEqual({
            cells: [
                [Cell.EMPTY, Cell.EMPTY, Cell.EMPTY, Cell.EMPTY,],
                [Cell.EMPTY, Cell.EMPTY, Cell.EMPTY, Cell.EMPTY,],
            ]
        });
    });
});