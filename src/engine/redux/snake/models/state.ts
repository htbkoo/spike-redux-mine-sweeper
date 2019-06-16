import {Cell} from "./Cell";

export type ItemId = string;

type GameConfigState = {
    "status": GameStatus.CONFIG,
    "prevGame"?: PlayingGameState
}

type PlayingGameState = {
    "status": GameStatus.PLAYING,
    "board": Board,
    "meta": {
        "size": BoardSize
    },
};

type GameState =
    | PlayingGameState
    | GameConfigState;

export enum GameStatus {
    PLAYING, CONFIG
}

type BoardSize = {
    "w": 0,
    "h": 0
}

type Board = Cell[][];

export type State = {
    "game": GameState
}