import {getGameState} from "./selectors";
import {DEFAULT_BOARD} from "../models/Board";

describe("selectors", function () {
    it("should ", () => {
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
});