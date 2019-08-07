// TODO: leverage reselect and re-reselect
// import { createSelector } from 'reselect';

// import { TodosState } from './reducer';
import {AppState, GameState} from "../models/state";

export const getGameState = (state: AppState) => state.game;
