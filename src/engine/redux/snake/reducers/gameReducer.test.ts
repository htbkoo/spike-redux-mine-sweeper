import {configureStore, ConfigureStoreOptions} from 'redux-starter-kit'
import {GameState, GameStatus} from "../models/state";
import {gameReducer} from "./gameReducer";
import {startGame, updateConfig} from "../actions/actionCreators";
import {Action} from "../actions/actions";

describe('gameReducer', function () {
    it('should create store for initial state', () => {
        // given
        // when
        const store = createStore();

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
        {
            config: {field: "w", newValue: 30},
            expected: {
                status: GameStatus.CONFIG,
                config: {
                    h: 8,
                    w: 30,
                    numBomb: 6
                }
            }
        },
        {
            config: {field: "numBomb", newValue: 10},
            expected: {
                status: GameStatus.CONFIG,
                config: {
                    h: 8,
                    w: 8,
                    numBomb: 10
                }
            }
        },
    ].forEach(({config, expected}) => {
        it(`should update config for field "${config.field}" to ${config.newValue}`, () => {
            // given
            const store = createStore();

            // when
            store.dispatch(updateConfig(config as any));

            // then
            return expect(store.getState()).toEqual(expected);
        });
    });

    it('should progress to PlayingGameState upon Action.StartGameAction', () => {
        // given
        const store = createStore();

        // when
        store.dispatch(startGame({
            config: {
                h: 6,
                w: 8,
                numBomb: 10
            }
        }));

        // then
        return expect(store.getState()).toEqual({
            "status": GameStatus.PLAYING,
            "board": [],
            "meta": {
                "size": {
                    "h": 6,
                    "w": 8,
                },
                "numBomb": 10
            },
        });
    });

    function createStore(overrides: Partial<ConfigureStoreOptions<GameState, Action>> = {}) {
        return configureStore({
            reducer: gameReducer,
            devTools: false,
            ...overrides
        });
    }
});