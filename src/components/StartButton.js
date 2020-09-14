import React from 'react';
import SecretWord from './SecretWord';

export default function StartButton({ startGame }) {
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