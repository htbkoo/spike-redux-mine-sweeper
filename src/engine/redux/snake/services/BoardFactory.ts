import {Board, GameConfig} from "../models/state";

export interface BoardFactory {
    createBoard(config: GameConfig): Board
}

export const randomBoardFactory: BoardFactory = {
    createBoard(): Board {
        throw new Error("Not implemented");
    }
};