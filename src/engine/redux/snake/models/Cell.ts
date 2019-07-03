export type Cell = Readonly<{
    isMine: boolean,
    isRevealed?: boolean,
    numNeighbourMine?: number,
}>;

export const Cells: { [celltype: string]: Cell } = Object.freeze({
    MINE: ({isMine: true}),
    EMPTY: ({isMine: false})
});