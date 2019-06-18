import {ActionType, StartGameAction, UpdateConfigAction} from "./actions";
import {GameConfig} from "../models/state";
import {BoardFactory, randomBoardFactory} from "../services/BoardFactory";

export function updateConfig({field, newValue}: Pick<UpdateConfigAction, 'field' | 'newValue'>): UpdateConfigAction {
    return {
        type: ActionType.UPDATE_CONFIG,
        field,
        newValue
    }
}

export function startGame({config, boardFactory = randomBoardFactory}: { config: GameConfig, boardFactory?: BoardFactory }): StartGameAction {
    return {
        type: ActionType.START_GAME,
        board: boardFactory.createBoard(config),
        config
    };
}