import _ from "lodash";

import {Board, GameConfig} from "../models/state";
import {RandomIntegerSequenceGenerator, SequenceGenerator} from "./SequenceGenerator";
import {Cell} from "../models/Cell";

export interface BoardFactory {
    createBoard(config: GameConfig): Board
}

export class RandomBoardFactory implements BoardFactory {
    public static readonly DEFAULT: RandomBoardFactory = new RandomBoardFactory(new RandomIntegerSequenceGenerator());

    private readonly sequenceGenerator: SequenceGenerator<number>;

    private constructor(sequenceGenerator: SequenceGenerator<number>) {
        this.sequenceGenerator = sequenceGenerator;
    }

    public static newInstance({sequenceGenerator}: { sequenceGenerator: SequenceGenerator<number> }): RandomBoardFactory {
        return new RandomBoardFactory(sequenceGenerator)
    }

    createBoard({w, h, numBomb}: GameConfig): Board {
        const bombsIndices = this.sequenceGenerator.generate({start: 0, end: h * w, length: numBomb});

        return _.range(0, h).map(r =>
            _.range(0, w).map(c =>
                isMine(r, c) ? Cell.MINE : Cell.EMPTY
            )
        );

        function isMine(r: number, c: number) {
            const flattenIndex: number = r * w + c;
            return bombsIndices.indexOf(flattenIndex) !== -1
        }
    }
}