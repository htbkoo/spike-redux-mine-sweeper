import _ from "lodash";

import {Cell} from "./Cell";

export type Board = Readonly<{
    cells: Cell[][],
    meta: Readonly<{
        "size": BoardSize,
        "numBomb": number,
    }>
}>

type BoardSize = Readonly<{
    "w": number,
    "h": number
}>

export const ZERO_SIZE_BOARD: Board = Object.freeze({
    cells: [],
    meta: {
        size: {
            w: 0,
            h: 0,
        },
        numBomb: 0
    }
});

export function newBoardFromCells({cells}: { cells: Cell[][] }): Board {
    return {
        cells,
        meta: {
            size: extractSize(cells),
            numBomb: 0
        }
    };
}

export function newBoard({w, h, bombsIndices = []}: { w: number, h: number, bombsIndices?: Array<number> }): Board {
    const cells = _.range(0, h).map(r =>
        _.range(0, w).map(c =>
            isMine(r, c) ? Cell.MINE : Cell.EMPTY
        )
    );

    function isMine(r: number, c: number) {
        const flattenIndex: number = r * w + c;
        return bombsIndices.indexOf(flattenIndex) !== -1
    }

    return {
        cells,
        meta: {
            size: {w, h},
            numBomb: bombsIndices.length
        }
    };
}

function extractSize(cells: Cell[][]): BoardSize {
    const h = cells.length;
    const w = h > 0 ? cells[0].length : 0;
    return {w, h,};
}