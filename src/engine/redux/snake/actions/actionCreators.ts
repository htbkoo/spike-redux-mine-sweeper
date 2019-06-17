import {ActionType, UpdateConfigAction} from "./actions";

export function updateConfig({field, newValue}: Pick<UpdateConfigAction, 'field' | 'newValue'>): UpdateConfigAction {
    return {
        type: ActionType.UPDATE_CONFIG,
        field,
        newValue
    }
}