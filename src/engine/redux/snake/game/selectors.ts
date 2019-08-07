// TODO: leverage reselect and re-reselect
import {createSelector} from 'reselect';

import {AppState, GameState} from "../models/state";

export const getGameState = (state: AppState) => state.game;
export const getBoardSize = createSelector(
    getGameState,
    extractBoardSize
);

type BoardSize = { h: number, w: number }

function extractBoardSize({board: {cells}}: GameState): BoardSize {
    const h = cells ? cells.length : 0;
    const w = (cells && h > 0) ? cells[0].length : 0;
    return {h, w};
}