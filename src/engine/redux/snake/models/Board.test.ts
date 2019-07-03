import {newBoard} from "./Board";
import {Cell} from "./Cell";

describe('Board', function () {
    it('should create blank board', () => {
        // when
        // given
        const board = newBoard({h: 2, w: 4});

        // then
        return expect(board).toEqual({
            cells: [
                [Cell.EMPTY, Cell.EMPTY, Cell.EMPTY, Cell.EMPTY,],
                [Cell.EMPTY, Cell.EMPTY, Cell.EMPTY, Cell.EMPTY,],
            ],
            meta: {size: {h: 2, w: 4}, numBomb: 0}
        });
    });

    it('should create board with bombs', () => {
        // when
        // given
        const board = newBoard({h: 2, w: 5, bombsIndices: [0, 8, 9]});

        // then
        return expect(board).toEqual({
            cells: [
                [Cell.MINE, Cell.EMPTY, Cell.EMPTY, Cell.EMPTY, Cell.EMPTY,],
                [Cell.EMPTY, Cell.EMPTY, Cell.EMPTY, Cell.MINE, Cell.MINE,],
            ],
            meta: {size: {h: 2, w: 5}, numBomb: 3}
        });
    });
});