import produce from "immer";
import {createReducer} from 'typesafe-actions';

import {GameState, GameStatus} from "../models/state";
import {createEmptyBoard, startGame, updateConfig} from "../actions/actionCreators";

const EMPTY_STATE: GameState = {
    status: GameStatus.CONFIG,
    config: {
        h: 8,
        w: 8,
        numBomb: 6
    }
};

export const gameReducer = createReducer(EMPTY_STATE as GameState)
    .handleAction(updateConfig, (state, {payload}) =>
        GameStatus.CONFIG === state.status
            ? produce(state, draft => {
                draft.config[payload.field] = payload.newValue;
            })
            : state
    )
    .handleAction(createEmptyBoard, (state, {payload}) =>
        GameStatus.CONFIG === state.status
            ? ({
                status: GameStatus.PRE_START,
                meta: {
                    size: {
                        h: payload.config.h,
                        w: payload.config.w,
                    },
                    numBomb: payload.config.numBomb
                },
            })
            : state
    )
    .handleAction(startGame, (state, {payload}) =>
        GameStatus.PRE_START === state.status
            ? ({
                status: GameStatus.PLAYING,
                meta: state.meta,
                board: payload.board
            })
            : state
    );
