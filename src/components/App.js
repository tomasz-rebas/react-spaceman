import React from 'react';
import SpacemanPicture from './SpacemanPicture';
import SecretWord from './SecretWord';
import Keyboard from './Keyboard';
import GameStateAlert from './GameStateAlert';
import ResetButton from './ResetButton';
import DifficultySettings from './DifficultySettings';

// state variables

// gameOngoing (true/false)
// 

export default function App() {
    return (
        <div>
            <h1>Spaceman</h1>
            <SpacemanPicture/>
            <SecretWord/>
            <Keyboard/>
            <GameStateAlert/>
            <ResetButton/>
            <DifficultySettings/>
        </div>
    );
}