import React from "react";
import {createStyles, Paper, Theme, withStyles, WithStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

import {GameState} from "../engine/redux/minesweeper/models/state";

const styles = ({palette, spacing}: Theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: spacing(), // TODO: investigate
        backgroundColor: palette.background.default,
        color: palette.primary.main,
    },
    gameBoardContainer: {"display": "flex", "justifyContent": "center", "height": "100%", marginTop: spacing(16)},
    gameBoardCell: {"width": "64px", "height": "64px", margin: spacing(0.5)}
});

interface GameBoardProps extends WithStyles<typeof styles> {
    gameState: GameState,
}

const GameBoard = withStyles(styles)(({gameState, classes}: GameBoardProps) => {
    const cells = gameState.board.cells.map((row, rowIndex) => (
        <tr key={`board-row-${rowIndex}`}>
            {
                row.map((cell, columnIndex) => (
                        <td key={`board-column-${columnIndex}`}>
                            <div>
                                <Button variant="contained" className={classes.gameBoardCell}>
                                </Button>
                            </div>
                        </td>
                    )
                )
            }
        </tr>
    ));

    return (
        <div className={classes.gameBoardContainer}>
            <Paper>
                <table>
                    <tbody>
                    {cells}
                    </tbody>
                </table>
            </Paper>
        </div>
    );
});

export default GameBoard;
