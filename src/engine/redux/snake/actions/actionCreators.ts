import {ActionType, StartGameAction, UpdateConfigAction} from "./actions";
import {GameConfig} from "../models/state";
import {BoardFactory, RandomBoardFactory} from "../services/BoardFactory";
import {RandomIntegerSequenceGenerator} from "../services/SequenceGenerator";

export function updateConfig({field, newValue}: Pick<UpdateConfigAction, 'field' | 'newValue'>): UpdateConfigAction {
    return {
        type: ActionType.UPDATE_CONFIG,
        field,
        newValue
    }
}

const defaultBoardFactory = RandomBoardFactory.newInstance({sequenceGenerator: new RandomIntegerSequenceGenerator()});

export function startGame({config, boardFactory = defaultBoardFactory}: { config: GameConfig, boardFactory?: BoardFactory }): StartGameAction {
    return {
        type: ActionType.START_GAME,
        board: boardFactory.createBoard(config),
        config
    };
}