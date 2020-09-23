import React, { useState, useReducer } from 'react';

import SpacemanPicture from './SpacemanPicture';
import SecretWord from './SecretWord';
import Keyboard from './Keyboard';
import GameStateAlert from './GameStateAlert';
import StartButton from './StartButton';
import DifficultySettings from './DifficultySettings';

import keyboardReducer from '../functions/keyboardReducer';
import vocabularyData from '../data.json';

export default function App() {

    const [categoryIndex, setCategoryIndex] = useState(0);
    const [secretWordData, setSecretWordData] = useState([]);
    const [gameStateAlert, setGameStateAlert] = useState('Click to start!');
    const [isGameOngoing, setIsGameOngoing] = useState(false);
    const [isFirstGameStarted, setIsFirstGameStarted] = useState(false);
    const [gameWon, setIsGameWon] = useState(false);
    const [drawingStage, setDrawingStage] = useState(9);

    const [letters, dispatch] = useReducer(keyboardReducer, [
        ['q', false], ['w', false], ['e', false], ['r', false],
        ['t', false], ['y', false], ['u', false], ['i', false],
        ['o', false], ['p', false], ['a', false], ['s', false],
        ['d', false], ['f', false], ['g', false], ['h', false],
        ['j', false], ['k', false], ['l', false], ['z', false],
        ['x', false], ['c', false], ['v', false], ['b', false],
        ['n', false], ['m', false]
    ]);

    function startGame() {
        const randomCategoryIndex = Math.floor(Math.random() * vocabularyData.length);
        const words = vocabularyData[randomCategoryIndex].words;
        const randomWord = words[Math.floor(Math.random() * words.length)].split('');
        const initiallyDisplayedLetter = randomWord[Math.floor(Math.random() * randomWord.length)];

        setIsGameWon(false);
        setCategoryIndex(randomCategoryIndex);
        setSecretWordData(randomWord.map((letter) => {
            return {
                letter: letter,
                visible: letter === initiallyDisplayedLetter ? true : false
            }
        }));
        setGameStateAlert('Guess the word to prevent the man from becoming a SPACEman!');
        setDrawingStage(1);
        setIsGameOngoing(true);
        setIsFirstGameStarted(true);
        
        dispatch({ type: 'ENABLE_ALL', except: initiallyDisplayedLetter });
    }

    function verifyLetter(e) {
        const { name } = e.target;
        let newSecretWordData = secretWordData;
        let letterGuessed = false;
        let allLettersVisisble = true;
        let lastDrawingStage = false;

        for (let i = 0; i < secretWordData.length; i++) {
            if (secretWordData[i].letter === name) {
                newSecretWordData[i].visible = true;
                letterGuessed = true;
            }
            if (secretWordData[i].visible === false) {
                allLettersVisisble = false;
            }
        }

        if (letterGuessed) {
            setSecretWordData(newSecretWordData);
        } else {
            if (drawingStage === 8) {
                lastDrawingStage = true;
            }
            setDrawingStage(drawingStage + 1);
        }

        if (allLettersVisisble) {
            endGame(true);
        } else if (lastDrawingStage) {
            endGame(false);
        }
    }

    function endGame(winner) {
        dispatch({ type: 'DISABLE_ALL' });
        setIsGameOngoing(false);
        setGameStateAlert(winner ? 'You win!' : 'You lose!');
        setIsGameWon(winner);
    }

    return (
        <div>
            <h1>Spaceman</h1>
            <SpacemanPicture drawingStage={drawingStage}/>
            <SecretWord 
                secretWordData={secretWordData}
                category={vocabularyData[categoryIndex].category}
                isFirstGameStarted={isFirstGameStarted}
            />
            <Keyboard
                letters={letters}
                dispatch={dispatch}
                verifyLetter={verifyLetter}
            />
            <GameStateAlert 
                gameStateAlert={gameStateAlert}
                isGameWon={gameWon}
                isGameOngoing={isGameOngoing}
                isFirstGameStarted={isFirstGameStarted}
            />
            <StartButton 
                startGame={startGame}
                isGameOngoing={isGameOngoing}
            />
            <DifficultySettings isGameOngoing={isGameOngoing}/>
            <footer>
                <i>Development in progress!</i>
                <br/>
                <i>Some components may not be functional yet.</i>
            </footer>
        </div>
    );
}