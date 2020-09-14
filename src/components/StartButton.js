import React from 'react';

export default function StartButton( { startGame } ) {
    return (
        <button 
            className="start-button"
            onClick={() => {
                startGame();
            }}
        >
            Start
        </button>
    );
}