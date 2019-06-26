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

export type GameMeta = {
    "size": BoardSize,
    "numBomb": number,
};

type PreStartGameState = {
    "status": GameStatus.PRE_START,
    "meta": GameMeta,
};
type PlayingGameState = {
    "status": GameStatus.PLAYING,
    "board": Board,
    "meta": GameMeta,
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