import {createStore} from "redux";

import {rootReducer} from "../reducers/rootReducer";
import {updateConfig} from "../game/actions";
import {ZERO_SIZE_BOARD} from "../models/Board";

describe('Mine Sweeper', function () {
    describe('Config State', () => {
        it('should create store for initial state', () => {
            // given
            // when
            const store = createStore(rootReducer);

            // then
            return expect(store.getState()).toEqual({
                game: {
                    config: {
                        h: 8,
                        w: 8,
                        numBomb: 6
                    },
                    board: ZERO_SIZE_BOARD,
                    meta: {
                        isDialogOpen: true,
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
            return expect(store.getState().game.config).toEqual({
                h: 20,
                w: 8,
                numBomb: 6
            });
        });
    });

});