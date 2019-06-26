import {ActionType, CreateEmptyBoardAction, StartGameAction, UpdateConfigAction} from "./actions";
import {GameConfig} from "../models/state";
import {BoardFactory, RandomBoardFactory} from "../services/BoardFactory";

export type UpdatedConfig = Pick<UpdateConfigAction, 'field' | 'newValue'>;

export function updateConfig({field, newValue}: UpdatedConfig): UpdateConfigAction {
    return {
        type: ActionType.UPDATE_CONFIG,
        field,
        newValue
    }
}

export function createEmptyBoard({config}: { config: GameConfig, }): CreateEmptyBoardAction {
    return {
        type: ActionType.CREATE_EMPTY_BOARD,
        config
    };
}

export function startGame({config, boardFactory = RandomBoardFactory.DEFAULT}: { config: GameConfig, boardFactory?: BoardFactory }): StartGameAction {
    return {
        type: ActionType.START_GAME,
        board: boardFactory.createBoard(config),
        config
    };
}