import {createStore} from "redux";
import {GameStatus} from "../models/state";
import {createGameReducer} from "./gameReducer";
import {updateConfig} from "../actions/actions";

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

    [
        {
            config: {field: "h", newValue: 20},
            expected: {
                status: GameStatus.CONFIG,
                config: {
                    h: 20,
                    w: 8,
                    numBomb: 6
                }
            }
        },
    ].forEach(({config, expected}) => {
        it(`should update config for field "${config.field}" to ${config.newValue}`, () => {
            // given
            const store = createStore(createGameReducer());

            // when
            store.dispatch(updateConfig(config as any));

            // then
            return expect(store.getState()).toEqual(expected);
        });

    });
});