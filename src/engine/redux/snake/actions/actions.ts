import {Board, GameConfig} from "../models/state";

export enum ActionType {
    UPDATE_CONFIG, CREATE_EMPTY_BOARD, START_GAME
}

export type UpdateConfigAction = {
    type: ActionType.UPDATE_CONFIG,
    field: keyof GameConfig,
    newValue: GameConfig[UpdateConfigAction['field']]
}

export type CreateEmptyBoardAction = {
    type: ActionType.CREATE_EMPTY_BOARD,
    config: GameConfig,
}

export type StartGameAction = {
    type: ActionType.START_GAME,
    board: Board,
    config: GameConfig,
}

export type Action =
    | UpdateConfigAction
    | StartGameAction
    | CreateEmptyBoardAction;

