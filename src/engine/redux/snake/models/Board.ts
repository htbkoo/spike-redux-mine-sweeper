import _ from "lodash";

import {Cell} from "./Cell";

export class Board {
    private readonly cells: Cell[][];

    private constructor({cells}: { cells: Cell[][] }) {
        this.cells = cells;
    }

    public static fromCells({cells}: { cells: Cell[][] }): Board {
        return new Board({cells});
    }

    public static newBlank({w, h}: { w: number, h: number }): Board {
        const cells = _.range(0, h).map(() => _.range(0, w).map(() => Cell.EMPTY));
        return new Board({cells});
    }

}
