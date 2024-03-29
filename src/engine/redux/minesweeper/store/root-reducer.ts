import {combineReducers} from "redux";

import {gameReducer} from "../reducers/gameReducer";

export const rootReducer = combineReducers({
    game: gameReducer
});