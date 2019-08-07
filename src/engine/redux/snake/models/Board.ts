import _ from "lodash";

import {Cell, Cells} from "./Cell";

export type Board = Readonly<{
    cells: Cell[][],
    meta: Readonly<{
        "numBomb": number,
    }>
}>

export const DEFAULT_BOARD: Board = Object.freeze(newEmptyBoard({w: 8, h: 8, numBomb: 6}));

export function newBoardFromCells({cells}: { cells: Cell[][] }): Board {
    return {
        cells,
        meta: {
            numBomb: 0
        }
    };
}

export function newEmptyBoard({w, h, numBomb}: { w: number, h: number, numBomb: number }): Board {
    return {
        cells: _.range(0, h).map(() => _.range(0, w).map(() => Cells.EMPTY)),
        meta: {numBomb}
    };
}

export function newBoard({w, h, bombsIndices = []}: { w: number, h: number, bombsIndices?: Array<number> }): Board {
    const cells = _.range(0, h).map(r =>
        _.range(0, w).map(c =>
            isMine(r, c) ? Cells.MINE : Cells.EMPTY
        )
    );

    function isMine(r: number, c: number) {
        const flattenIndex: number = r * w + c;
        return bombsIndices.indexOf(flattenIndex) !== -1
    }

    return {
        cells,
        meta: {
            numBomb: bombsIndices.length
        }
    };
}