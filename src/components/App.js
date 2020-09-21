import React, { useState, useEffect, useReducer } from 'react';

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

    useEffect(() => {
        randomizeCategory();
    }, []);

    const [letters, dispatch] = useReducer(keyboardReducer, [
        ['q', false], ['w', false], ['e', false], ['r', false],
        ['t', false], ['y', false], ['u', false], ['i', false],
        ['o', false], ['p', false], ['a', false], ['s', false],
        ['d', false], ['f', false], ['g', false], ['h', false],
        ['j', false], ['k', false], ['l', false], ['z', false],
        ['x', false], ['c', false], ['v', false], ['b', false],
        ['n', false], ['m', false]
    ]);

    function randomizeCategory() {
        setCategoryIndex(Math.floor(Math.random() * vocabularyData.length));
    }

    function startGame() {
        const words = vocabularyData[categoryIndex].words;
        const randomWord = words[Math.floor(Math.random() * words.length)].split('');
        const initiallyDisplayedLetter = randomWord[Math.floor(Math.random() * randomWord.length)];
        setSecretWordData(randomWord.map((letter) => {
            return {
                letter: letter,
                visible: letter === initiallyDisplayedLetter ? true : false
            }
        }));
        setGameStateAlert('Guess the word to prevent the man from becoming a SPACEman!');
        setIsGameOngoing(true);
        dispatch({ type: 'ENABLE_ALL', except: initiallyDisplayedLetter });
    }

    function verifyLetter(e) {
        const { name } = e.target;
        setSecretWordData(secretWordData.map(element => {
            return element.letter === name ? { letter: element.letter, visible: true } : element;
        }))
    }

    return (
        <div>
            <h1>Spaceman</h1>
            <SpacemanPicture/>
            <SecretWord 
                secretWordData={secretWordData}
                category={vocabularyData[categoryIndex].category}
                isGameOngoing={isGameOngoing}
            />
            <Keyboard
                letters={letters}
                dispatch={dispatch}
                verifyLetter={verifyLetter}
            />
            <GameStateAlert gameStateAlert={gameStateAlert}/>
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