import {configureStore, ConfigureStoreOptions} from 'redux-starter-kit';
import {ActionType} from "typesafe-actions";

import {GameState} from "../models/state";
import {gameReducer} from "./gameReducer";
import * as gameActions from "../game/actions";
import {createEmptyBoard, startGame, updateConfig} from "../game/actions";
import {newBoardFromCells, DEFAULT_BOARD} from "../models/Board";

describe('gameReducer', function () {
    it('should create store for initial state', () => {
        // given
        // when
        const store = createStore();

        // then
        return expect(store.getState()).toEqual({
            config: {
                h: 8,
                w: 8,
                numBomb: 6
            },
            board: DEFAULT_BOARD,
            meta: {
                isDialogOpen: true
            }
        });
    });

    [
        {
            config: {field: "h", newValue: 20},
            expected: {
                h: 20,
                w: 8,
                numBomb: 6
            }
        },
        {
            config: {field: "w", newValue: 30},
            expected: {
                h: 8,
                w: 30,
                numBomb: 6
            }
        },
        {
            config: {field: "numBomb", newValue: 10},
            expected: {
                h: 8,
                w: 8,
                numBomb: 10
            }
        },
    ].forEach(({config, expected}) => {
        it(`should update config for field "${config.field}" to ${config.newValue}`, () => {
            // given
            const store = createStore();

            // when
            store.dispatch(updateConfig(config as any));

            // then
            return expect(store.getState().config).toEqual(expected);
        });
    });

    it('should progress to PreStartGameState upon Action.CreateEmptyBoardAction', () => {
        // given
        const store = createStore();

        // when
        store.dispatch(createEmptyBoard({
            config: {
                h: 50,
                w: 40,
                numBomb: 100
            },
        }));

        // then
        return expect(store.getState().meta).toEqual({
            isDialogOpen: true
        });
    });

    xit('should progress to PlayingGameState upon Action.StartGameAction', () => {
        // given
        const store = createStore(
            {
                preloadedState: {}
            }
        );
        const MOCK_BOARD = newBoardFromCells({cells: [[], [], [], [], []]});

        // when
        store.dispatch(startGame({
            config: {
                h: 6,
                w: 8,
                numBomb: 10
            },
            boardFactory: {
                createBoard() {
                    return MOCK_BOARD;
                }
            }
        }));

        // then
        return expect(store.getState()).toEqual({
            "board": MOCK_BOARD,
            "meta": {
                "size": {
                    "h": 6,
                    "w": 8,
                },
                "numBomb": 10
            },
        });
    });

    function createStore(overrides: Omit<Partial<ConfigureStoreOptions<GameState, ActionType<typeof gameActions>>>, "reducer"> = {}) {
        return configureStore({
            reducer: gameReducer,
            devTools: false,
            ...overrides
        });
    }
});