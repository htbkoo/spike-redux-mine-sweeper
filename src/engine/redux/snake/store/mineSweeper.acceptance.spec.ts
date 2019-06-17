import {createStore} from "redux";
import {GameStatus} from "../models/state";
import {rootReducer} from "../reducers/rootReducer";
import {updateConfig} from "../actions/actions";

describe('Mine Sweeper', function () {
    describe('Config State', () => {
        it('should create store for initial state', () => {
            // given
            // when
            const store = createStore(rootReducer);

            // then
            return expect(store.getState()).toEqual({
                game: {
                    status: GameStatus.CONFIG,
                    config: {
                        h: 8,
                        w: 8,
                        numBomb: 6
                    }
                }
            });
        });

        it('should update config', () => {
            // given
            const store = createStore(rootReducer);

            // when
            store.dispatch(updateConfig({field: "h", newValue: 20}));

            // then
            return expect(store.getState()).toEqual({
                game: {
                    status: GameStatus.CONFIG,
                    config: {
                        h: 20,
                        w: 8,
                        numBomb: 6
                    }
                }
            });
        });
    });

});