import React from 'react';

export default function GameStateAlert( { gameStateAlert, gameWon, gameOngoing, firstGameStarted } ) {

    let alertStyle;

    if (gameOngoing || !firstGameStarted) {
        alertStyle = {}
    } else {
        alertStyle = gameWon ? {
                fontSize: '1.3em', 
                color: 'lime'
            } : {
                fontSize: '1.3em', 
                color: 'salmon'
            }
    }

    return (
        <div 
            className="game-state-alert"
            style={alertStyle}
        >
            {gameStateAlert}
        </div>
    );
}