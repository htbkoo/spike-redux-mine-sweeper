import React from 'react';
import {useSelector,} from "react-redux";

import {AppState, GameState} from "./engine/redux/snake/models/state";
import GameBoard from "./components/GameBoard";
import DebugStateMessage from "./components/DebugStateMessage";
import GameConfigDialog from "./components/GameConfigField";

import './App.css';

const App: React.FC = () => {
    const gameState: GameState = useSelector((state: AppState) => state.game);

    return (
        <div className="App">
            <GameConfigDialog gameState={gameState}/>
            <GameBoard gameState={gameState}/>
            <DebugStateMessage gameState={gameState}/>
        </div>
    );
};

export default App;
