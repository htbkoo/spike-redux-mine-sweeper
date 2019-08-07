import React, {ChangeEvent} from "react";
import {Dispatch} from "redux";
import TextField from "@material-ui/core/TextField";

import {GameConfig} from "../engine/redux/snake/models/state";
import {updateConfig} from "../engine/redux/snake/game/actions";

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

export default GameConfigField;