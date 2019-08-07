import React from "react";

import {GameState} from "../engine/redux/snake/models/state";

function DebugStateMessage({gameState}: { gameState: GameState, }) {
    const debugStateAsString = isProdEnv() ? "" : JSON.stringify(gameState);

    return (
        <div>
            {debugStateAsString}
        </div>
    );

    function isProdEnv() {
        return process.env.NODE_ENV === "production";
    }
}

export default DebugStateMessage;