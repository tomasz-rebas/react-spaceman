import React from 'react';

export default function StartButton( { startGame, isGameOngoing } ) {
    return (
        <button 
            className="start-button"
            onClick={() => {
                startGame();
            }}
            disabled={isGameOngoing ? 'disabled' : ''}
        >
            Start
        </button>
    );
}