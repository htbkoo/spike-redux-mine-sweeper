export class Cell {
    private readonly isMine: boolean;
    private readonly isRevealed?: boolean;
    private readonly numNeighbourMine?: number;

    public static MINE: Cell = new Cell({isMine: true});
    public static EMPTY: Cell = new Cell({isMine: false});

    constructor({isMine, isRevealed, numNeighbourMine}: { isMine: boolean, isRevealed?: boolean, numNeighbourMine?: number }) {
        this.isMine = isMine;
        this.isRevealed = isRevealed;
        this.numNeighbourMine = numNeighbourMine;
    }
}