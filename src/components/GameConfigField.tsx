import React from "react";
import {useDispatch} from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

import GameConfigField from "./GameConfigDialog";
import {GameState} from "../engine/redux/minesweeper/models/state";
import {startGame} from "../engine/redux/minesweeper/game/actions";

//(updated: UpdatedConfig) => void
const BOARD_SIZE_RANGE = {min: 6, max: 25};

function GameConfigDialog({gameState}: { gameState: GameState, }) {
    const {config, meta} = gameState;
    const isConfigDialogOpen = meta.isDialogOpen;
    const dispatch = useDispatch();

    function optionalDialog() {
        if (isConfigDialogOpen) {
            return (
                <Dialog open={isConfigDialogOpen} aria-labelledby="game-config-dialog">
                    <DialogTitle id="game-config-dialog">Game Configuration</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Feel free to customize your game! :)
                        </DialogContentText>
                        <GameConfigField
                            id="width"
                            label="Width"
                            config={config}
                            field="w"
                            range={BOARD_SIZE_RANGE}
                            dispatch={dispatch}
                        />
                        <GameConfigField
                            id="height"
                            label="height"
                            config={config}
                            field="h"
                            range={BOARD_SIZE_RANGE}
                            dispatch={dispatch}
                        />
                        <GameConfigField
                            id="numBombs"
                            label="Number of Bombs"
                            config={config}
                            field="numBomb"
                            range={getNumBombsRange()}
                            dispatch={dispatch}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => dispatch(startGame({config}))}
                                color="primary">
                            Start Game
                        </Button>
                    </DialogActions>
                </Dialog>
            );
        } else {
            return "";
        }
    }

    const MAX_BOMB_PERCENTAGE = 0.3;

    function getNumBombsRange() {
        const min = 1;
        const max = Math.round(config.h * config.w * MAX_BOMB_PERCENTAGE);

        return {min, max};
    }

    return (
        <div>
            {optionalDialog()}
        </div>
    );
}

export default GameConfigDialog;
