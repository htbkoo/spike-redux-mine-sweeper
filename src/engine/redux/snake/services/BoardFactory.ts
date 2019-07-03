import {GameConfig} from "../models/state";
import {RandomIntegerSequenceGenerator, SequenceGenerator} from "./SequenceGenerator";
import {Board, newBoard} from "../models/Board";

export interface BoardFactory {
    createBoard(config: GameConfig): Board
}

export class RandomBoardFactory implements BoardFactory {
    public static readonly DEFAULT: RandomBoardFactory = new RandomBoardFactory({
        sequenceGenerator: RandomIntegerSequenceGenerator.DEFAULT
    });

    private readonly sequenceGenerator: SequenceGenerator<number>;

    constructor({sequenceGenerator}: { sequenceGenerator: SequenceGenerator<number> }) {
        this.sequenceGenerator = sequenceGenerator;
    }

    createBoard({w, h, numBomb}: GameConfig): Board {
        const bombsIndices = this.sequenceGenerator.generate({start: 0, end: h * w, length: numBomb});

        return newBoard({w, h, bombsIndices});
    }
}