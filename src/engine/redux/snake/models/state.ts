import {rootReducer} from "../reducers/rootReducer";
import {Board} from "./Board";

export type ItemId = string;

export type GameConfig = {
    "w": number,
    "h": number,
    "numBomb": number,
};

export type GameMeta = {
    "size": BoardSize,
    "numBomb": number,
    "isDialogOpen": boolean
};

export type GameState = {
    "board": Board,
    "meta": GameMeta,
    "config": GameConfig
};

export enum GameStatus {
    PRE_START, PLAYING, CONFIG
}

type BoardSize = {
    "w": number,
    "h": number
}

export type AppState = ReturnType<typeof rootReducer>