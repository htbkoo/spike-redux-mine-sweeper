import {Reducer} from "redux";

import {GameState, GameStatus} from "../models/state";
import {Action, ActionType} from "../actions/actions";
import produce from "immer";

const EMPTY_STATE: GameState = {
    status: GameStatus.CONFIG,
    config: {
        h: 8,
        w: 8,
        numBomb: 6
    }
};

export const gameReducer: Reducer<GameState, Action> = (state = EMPTY_STATE, action: Action) => {
    if (GameStatus.CONFIG === state.status) {
        if (action.type === ActionType.UPDATE_CONFIG) {
            return produce(state, draft => {
                draft.config[action.field] = action.newValue;
            });
        } else if (action.type === ActionType.START_GAME) {
            return {
                status: GameStatus.PLAYING,
                meta: {
                    size: {
                        h: action.config.h,
                        w: action.config.w,
                    },
                    numBomb: action.config.numBomb
                },
                board: action.board
            }
        }
    }

    return state;
};