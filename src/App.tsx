import React, {ChangeEvent} from 'react';
import {Dispatch} from "redux";
import {useDispatch, useSelector,} from "react-redux";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {AppState, GameConfig, GameState} from "./engine/redux/snake/models/state";
import {startGame, updateConfig} from "./engine/redux/snake/game/actions";
import GameBoard from "./components/GameBoard";
import DebugStateMessage from "./components/DebugStateMessage";

import './App.css';

type FieldNumberRange = { min: number, max: number };

function GameConfigField({config, field, id, label, range: {min, max}, dispatch}: { config: GameConfig, field: keyof GameConfig, id: string, label: string, range: FieldNumberRange, dispatch: Dispatch }) {
    return (
        <TextField
            autoFocus
            id={id}
            label={label}
            fullWidth
            value={config[field]}
            margin="normal"
            variant="outlined"
            type="number"
            InputProps={{inputProps: {min, max}}}
            onChange={updateIfValid}
        />
    );

    function updateIfValid(event: ChangeEvent<HTMLInputElement>) {
        const newValue = parseInt(event.target.value);
        if (Number.isInteger(newValue)) {
            return dispatch(updateConfig({field, newValue}));
        }
    }
}

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

const App: React.FC = () => {
    const gameState: GameState = useSelector((state: AppState) => state.game);

    return (
        <div className="App">
            <GameConfigDialog gameState={gameState}/>
            <GameBoard gameState={gameState}/>
            <DebugStateMessage gameState={gameState}/>
        </div>
    );
};

export default App;
