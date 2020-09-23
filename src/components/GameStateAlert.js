import React from 'react';

export default function GameStateAlert( { gameStateAlert, isGameWon, isGameOngoing, isFirstGameStarted } ) {

    let alertStyle;

    if (isGameOngoing || !isFirstGameStarted) {
        alertStyle = {}
    } else {
        alertStyle = isGameWon ? {
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