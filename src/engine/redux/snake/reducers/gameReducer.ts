import {Reducer} from "redux";

import {GameState, GameStatus} from "../models/state";
import {Action, ActionType} from "../actions/actions";
import produce from "immer";

type Dependencies = {};

const DEFAULT_DEPENDENCIES: Dependencies = {};

const EMPTY_STATE: GameState = {
    status: GameStatus.CONFIG,
    config: {
        h: 8,
        w: 8,
        numBomb: 6
    }
};

export function createGameReducer(overrides: Dependencies = DEFAULT_DEPENDENCIES): Reducer<GameState, Action> {
    const {} = {
        ...DEFAULT_DEPENDENCIES,
        ...overrides
    };
    return (state = EMPTY_STATE, action) => {
        switch (action.type) {
            case ActionType.UPDATE_CONFIG: {
                switch (state.status) {
                    case GameStatus.CONFIG: {
                        return produce(state, draft => {
                            draft.config[action.field] = action.newValue;
                        });
                    }

                }
            }
        }
        return state;
    }
}

