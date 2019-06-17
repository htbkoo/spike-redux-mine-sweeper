import {GameConfig} from "../models/state";

export enum ActionType {
    UPDATE_CONFIG
}

export type UpdateConfigAction = {
    type: ActionType.UPDATE_CONFIG,
    field: keyof GameConfig,
    newValue: GameConfig[UpdateConfigAction['field']]
}

export type Action =
    | UpdateConfigAction;

