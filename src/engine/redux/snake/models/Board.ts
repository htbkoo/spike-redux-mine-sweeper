import {Cell} from "./Cell";

export class Board {
    private readonly cells: Cell[][];

    private constructor({cells}: { cells: Cell[][] }) {
        this.cells = cells;
    }

    public static fromCells({cells}: { cells: Cell[][] }): Board {
        return new Board({cells});
    }

    public static newBlank({cells}: { cells: Cell[][] }): Board {
        return new Board({cells});
    }

}
