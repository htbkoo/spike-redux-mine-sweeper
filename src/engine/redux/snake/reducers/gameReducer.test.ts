import {createStore} from "redux";
import {GameStatus} from "../models/state";
import {createGameReducer} from "./gameReducer";
import {updateCofnfig} from "../actions/actions";

describe('gameReducer', function () {
    it('should create store for initial state', () => {
        // given
        // when
        const store = createStore(createGameReducer());

        // then
        return expect(store.getState()).toEqual({
            status: GameStatus.CONFIG,
            config: {
                h: 8,
                w: 8,
                numBomb: 6
            }
        });
    });

    it('should update config', () => {
        // given
        const store = createStore(createGameReducer());

        // when
        store.dispatch(updateCofnfig({field: "h", newValue: 20}));

        // then
        return expect(store.getState()).toEqual({
            status: GameStatus.CONFIG,
            config: {
                h: 20,
                w: 8,
                numBomb: 6
            }
        });
    });
});