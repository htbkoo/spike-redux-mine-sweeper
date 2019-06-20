import {ActionType, StartGameAction, UpdateConfigAction} from "./actions";
import {GameConfig} from "../models/state";
import {BoardFactory, RandomBoardFactory} from "../services/BoardFactory";

export function updateConfig({field, newValue}: Pick<UpdateConfigAction, 'field' | 'newValue'>): UpdateConfigAction {
    return {
        type: ActionType.UPDATE_CONFIG,
        field,
        newValue
    }
}

export function startGame({config, boardFactory = RandomBoardFactory.DEFAULT}: { config: GameConfig, boardFactory?: BoardFactory }): StartGameAction {
    return {
        type: ActionType.START_GAME,
        board: boardFactory.createBoard(config),
        config
    };
}