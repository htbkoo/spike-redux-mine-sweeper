import React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";

import {GameState} from "../engine/redux/snake/models/state";

const styles = ({spacing}: Theme) => createStyles({
    alwaysBottom: {
        position: 'absolute',
        left: spacing(),
        top: spacing(),
        maxWidth: '20%',
    },
});

interface Props extends WithStyles<typeof styles> {
    gameState: GameState,
}

const DebugStateMessage = withStyles(styles)(function DebugStateMessage({gameState, classes}: Props) {
    const debugStateAsString = isProdEnv() ? "" : JSON.stringify(gameState);

    return (
        <div className={classes.alwaysBottom}>
            {debugStateAsString}
        </div>
    );

    function isProdEnv() {
        return process.env.NODE_ENV === "production";
    }
});

export default DebugStateMessage;