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

import './App.css';

function GameConfigField({config, field, id, label, dispatch}: { config: GameConfig, field: keyof GameConfig, id: string, label: string, dispatch: Dispatch, }) {
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
            InputProps={{inputProps: {min: 1}}}
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
                            dispatch={dispatch}
                        />
                        <GameConfigField
                            id="height"
                            label="height"
                            config={config}
                            field="h"
                            dispatch={dispatch}
                        />
                        <GameConfigField
                            id="numBombs"
                            label="Number of Bombs"
                            config={config}
                            field="numBomb"
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


    return (
        <div>
            {optionalDialog()}
        </div>
    );
}


function DebugStateMessage({gameState}: { gameState: GameState, }) {
    const debugStateAsString = isProdEnv() ? "" : JSON.stringify(gameState);

    return (
        <div>
            {debugStateAsString}
        </div>
    );

    function isProdEnv() {
        return process.env.NODE_ENV === "production";
    }
}

const App: React.FC = () => {
    const gameState: GameState = useSelector((state: AppState) => state.game);

    return (
        <div className="App">
            <DebugStateMessage gameState={gameState}/>
            <GameConfigDialog gameState={gameState}/>
        </div>
    );
};

export default App;
