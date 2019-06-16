import {GameStatus, State} from "../models/state";
import {Action} from "../actions/actions";
import {Reducer} from "redux";

type Dependencies = {};

const DEFAULT_DEPENDENCIES = {};

const EMPTY_STATE: State = {
    game: {
        status: GameStatus.CONFIG
    }
};

export function createReducers(overrides: Dependencies = DEFAULT_DEPENDENCIES): Reducer<State, Action> {
    const {}  = {
        ...DEFAULT_DEPENDENCIES,
        ...overrides
    };
    return (state = EMPTY_STATE) => state;
}