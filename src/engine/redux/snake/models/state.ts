import {rootReducer} from "../reducers/rootReducer";
import {Board} from "./Board";

export type GameConfig = {
    "w": number,
    "h": number,
    "numBomb": number,
};

export type GameMeta = {
    "isDialogOpen": boolean
};

export type GameState = {
    "board": Board,
    "meta": GameMeta,
    "config": GameConfig
};

export type AppState = ReturnType<typeof rootReducer>