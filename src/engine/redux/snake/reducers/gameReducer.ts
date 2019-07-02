import produce from "immer";
import {createReducer} from 'typesafe-actions';

import {GameState} from "../models/state";
import {createEmptyBoard, startGame, updateConfig} from "../actions/actionCreators";
import {Board} from "../models/Board";

const EMPTY_STATE: GameState = {
    config: {
        h: 8,
        w: 8,
        numBomb: 6
    },
    board: Board.ZERO_SIZE_BOARD,
    // todo: migrate size meta to Board
    meta: {
        isDialogOpen: true,
        numBomb: 6,
        size: {
            h: 8,
            w: 6
        }
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
            draft.meta.size = {
                h: payload.config.h,
                w: payload.config.w,
            };
            draft.meta.numBomb = payload.config.numBomb;
        })
    )
    .handleAction(startGame, (state, {payload}) =>
        produce(state, draft => {

        })
    );
