import produce from "immer";
import {createReducer} from 'typesafe-actions';

import {GameState} from "../models/state";
import {createEmptyBoard, startGame, updateConfig} from "../game/actions";
import {newBoard, DEFAULT_BOARD, newEmptyBoard} from "../models/Board";

const EMPTY_STATE: GameState = {
    config: {
        h: 8,
        w: 8,
        numBomb: 6
    },
    board: DEFAULT_BOARD,
    meta: {
        isDialogOpen: true,
    }
};

export const gameReducer = createReducer(EMPTY_STATE as GameState)
    .handleAction(updateConfig, (state, {payload}) =>
        produce(state, draft => {
            draft.config[payload.field] = payload.newValue;
        })
    )
    .handleAction(createEmptyBoard, (state, {payload}) =>
        produce(state, draft => {
            draft.board = newBoard({h: payload.config.h, w: payload.config.w,});
            // todo: utilize payload.config.numBomb;
        })
    )
    .handleAction(startGame, (state, {payload: {config}}) =>
        produce(state, draft => {
            draft.meta.isDialogOpen = false;
            draft.board = newEmptyBoard(config)
        })
    );
