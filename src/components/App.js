import React, { useState, useReducer, useEffect } from 'react';

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
    const [drawingStageIndex, setDrawingStageIndex] = useState(8);
    const [drawingStageList, setDrawingStageList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [guessesLeft, setGuessesLeft] = useState();

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
                visible: letter === initiallyDisplayedLetter ? true : false,
            }
        }));
        setGameStateAlert('Guess the word to prevent the man from becoming a SPACEman!');
        setDrawingStageIndex(0);
        setIsGameOngoing(true);
        setIsFirstGameStarted(true);
        
        dispatch({ type: 'ENABLE_ALL', except: initiallyDisplayedLetter });
    }

    function verifyLetter(e) {
        const { name } = e.target;
        let newSecretWordData = secretWordData;
        let letterGuessed = false;
        let allLettersVisisble = true;

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
            setDrawingStageIndex(() => {
                for (let i = drawingStageIndex + 1; i < drawingStageList.length; i++) {
                    if (drawingStageList[i] !== -1) {
                        return i;
                    }
                }
            });
        }

        if (allLettersVisisble) {
            endGame(true);
        } else if (getGuessesLeft() <= 1) {
            endGame(false);
        }
    }

    function getGuessesLeft() {
        let count = 0;
        for (let i = drawingStageIndex + 1; i < drawingStageList.length; i++) {
            if (drawingStageList[i] !== -1) {
                count++;
            }
        }
        return count;
    }

    useEffect(() => {
        setGuessesLeft(getGuessesLeft());
    }, [drawingStageIndex])

    function endGame(winner) {
        dispatch({ type: 'DISABLE_ALL' });
        setIsGameOngoing(false);
        setGameStateAlert(winner ? 'You win!' : 'You lose!');
        setIsGameWon(winner);
        if (!winner) {
            setSecretWordData(secretWordData.map(element => {
                return element.visible ? element : {
                    letter: element.letter,
                    visible: true,
                    autofilled: true
                }
            }));
        }
    }

    return (
        <div>
            <h1>Spaceman</h1>
            <SpacemanPicture 
                drawingStageIndex={drawingStageIndex}
                drawingStageList={drawingStageList}
            />
            <SecretWord 
                secretWordData={secretWordData}
                category={vocabularyData[categoryIndex].category}
                isFirstGameStarted={isFirstGameStarted}
                guessesLeft={guessesLeft}
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
            <DifficultySettings
                isGameOngoing={isGameOngoing}
                setDrawingStageList={setDrawingStageList}
            />
            <footer>
                {/* <i>Development in progress!</i>
                <br/>
                <i>Some components may not be functional yet.</i> */}
            </footer>
        </div>
    );
}