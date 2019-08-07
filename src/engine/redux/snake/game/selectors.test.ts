import {getBoardSize, getGameState} from "./selectors";
import {DEFAULT_BOARD} from "../models/Board";
import {GameState} from "../models/state";

describe("selectors", function () {
    it("should getGameState", () => {
        // given
        const gameState = {
            config: {
                h: 8,
                w: 8,
                numBomb: 6
            },
            board: DEFAULT_BOARD,
            meta: {
                isDialogOpen: true,
            }
        };

        // when
        const actual = getGameState({
            game: gameState
        });

        // then
        expect(actual).toEqual(gameState);
    });

    it("should get board size", () => {
        // given
        const gameState: GameState = {
            board: DEFAULT_BOARD,
        } as any;

        // when
        const actual = getBoardSize({
            game: gameState
        });

        // then
        const expected = {h: 8, w: 8};
        expect(actual).toEqual(expected);
    });
});