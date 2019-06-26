import {Cell} from "./Cell";
import {rootReducer} from "../reducers/rootReducer";

export type ItemId = string;

export type GameConfig = {
    "w": number,
    "h": number,
    "numBomb": number
};

export type GameConfigState = {
    "status": GameStatus.CONFIG,
    "prevGame"?: PlayingGameState
    "config": GameConfig
}

type PreStartGameState = {
    "status": GameStatus.PRE_START,
    "meta": {
        "size": BoardSize,
        "numBomb": number,
    },
};
type PlayingGameState = {
    "status": GameStatus.PLAYING,
    "board": Board,
    "meta": {
        "size": BoardSize,
        "numBomb": number,
    },
};

export type GameState =
    | PlayingGameState
    | GameConfigState
    | PreStartGameState;

export enum GameStatus {
    PRE_START, PLAYING, CONFIG
}

type BoardSize = {
    "w": number,
    "h": number
}

export type Board = Cell[][];

export type AppState = ReturnType<typeof rootReducer>