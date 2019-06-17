import {GameConfig} from "../models/state";

export enum ActionType {
    UPDATE_CONFIG, START_GAME
}

export type UpdateConfigAction = {
    type: ActionType.UPDATE_CONFIG,
    field: keyof GameConfig,
    newValue: GameConfig[UpdateConfigAction['field']]
}

export type StartGameAction = {
    type: ActionType.START_GAME,
}

export type Action =
    | UpdateConfigAction
    | StartGameAction;

