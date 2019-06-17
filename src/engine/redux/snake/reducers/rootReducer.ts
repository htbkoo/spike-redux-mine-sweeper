import {combineReducers} from "redux";

import {createGameReducer} from "./gameReducer";

export const rootReducer = combineReducers({
    game: createGameReducer()
});