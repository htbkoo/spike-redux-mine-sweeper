import {UpdateConfigAction} from "./actions";
import {GameConfig} from "../models/state";
import {BoardFactory, RandomBoardFactory} from "../services/BoardFactory";
import {createStandardAction} from 'typesafe-actions';

export type UpdatedConfig = Pick<UpdateConfigAction, 'field' | 'newValue'>;

export const updateConfig = createStandardAction('UPDATE_CONFIG')
    .map(({field, newValue}: UpdatedConfig) => ({payload: {field, newValue}}));

export const createEmptyBoard = createStandardAction('CREATE_EMPTY_BOARD')
    .map(({config}: { config: GameConfig, }) => ({payload: {config}}));

export const startGame = createStandardAction('START_GAME')
    .map(({config, boardFactory = RandomBoardFactory.DEFAULT}: { config: GameConfig, boardFactory?: BoardFactory }) => ({
        payload: {board: boardFactory.createBoard(config), config}
    }));
