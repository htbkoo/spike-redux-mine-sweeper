import {createStore} from "redux";
import {GameStatus} from "../models/state";
import {createReducers} from "../reducers/reducersFactory";
// import {addItem, clearItems, editItem, toggleItem} from "../actions/ActionCreators";

describe('Mine Sweeper', function () {
    it('should create store for initial state', () => {
        // given
        // when
        const store = createStore(createReducers());

        // then
        return expect(store.getState()).toEqual({
            game: {
                status: GameStatus.CONFIG
            }
        });
    });
});