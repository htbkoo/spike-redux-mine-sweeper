import {GameConfig} from "../models/state";

export enum ActionType {
    UPDATE_CONFIG
}

type UpdateConfigAction = {
    type: ActionType.UPDATE_CONFIG,
    field: keyof GameConfig,
    newValue: GameConfig[UpdateConfigAction['field']]
}

export type Action =
    | UpdateConfigAction;

export function updateConfig({field, newValue}: Pick<UpdateConfigAction, 'field' | 'newValue'>): UpdateConfigAction {
    return {
        type: ActionType.UPDATE_CONFIG,
        field,
        newValue
    }
}