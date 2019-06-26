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

export const gameReducer: Reducer<GameState, Action> = (state: GameState = EMPTY_STATE, action: Action) => {
    switch (state.status) {
        case GameStatus.PLAYING: {
            break;
        }
        case GameStatus.PRE_START: {
            // noinspection JSRedundantSwitchStatement
            switch (action.type) {
                case ActionType.START_GAME: {
                    return {
                        status: GameStatus.PLAYING,
                        meta: state.meta,
                        board: action.board
                    };
                }
            }
            break;
        }
        case GameStatus.CONFIG: {
            switch (action.type) {
                case ActionType.UPDATE_CONFIG: {
                    return produce(state, draft => {
                        draft.config[action.field] = action.newValue;
                    });
                }
                case ActionType.CREATE_EMPTY_BOARD: {
                    return {
                        status: GameStatus.PRE_START,
                        meta: {
                            size: {
                                h: action.config.h,
                                w: action.config.w,
                            },
                            numBomb: action.config.numBomb
                        },
                    }
                }
            }
            break;
        }
    }

    return state;
};