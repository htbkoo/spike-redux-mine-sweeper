import _ from "lodash";

import {Cell} from "./Cell";

// todo: migrate size meta to Board
export class Board {
    public static readonly ZERO_SIZE_BOARD = new Board({cells: []});

    private readonly cells: Cell[][];

    private constructor({cells}: { cells: Cell[][] }) {
        this.cells = cells;
    }

    public static fromCells({cells}: { cells: Cell[][] }): Board {
        return new Board({cells});
    }

    public static newBoard({w, h, bombsIndices = []}: { w: number, h: number, bombsIndices?: Array<number> }): Board {
        const cells = _.range(0, h).map(r =>
            _.range(0, w).map(c =>
                isMine(r, c) ? Cell.MINE : Cell.EMPTY
            )
        );

        function isMine(r: number, c: number) {
            const flattenIndex: number = r * w + c;
            return bombsIndices.indexOf(flattenIndex) !== -1
        }

        return new Board({cells});
    }

}
