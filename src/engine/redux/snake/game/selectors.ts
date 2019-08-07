// TODO: leverage reselect and re-reselect
// import { createSelector } from 'reselect';

// import { TodosState } from './reducer';
import {GameState} from "../models/state";

export const getTodos = (state: GameState) => state.meta;
