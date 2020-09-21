import React, { useState, useEffect, useReducer } from 'react';
import SpacemanPicture from './SpacemanPicture';
import SecretWord from './SecretWord';
import Keyboard from './Keyboard';
import GameStateAlert from './GameStateAlert';
import StartButton from './StartButton';
import DifficultySettings from './DifficultySettings';
import keyboardReducer from '../functions/keyboardReducer';

export default function App() {
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const fetchData = await fetch('https://www.fruitmap.org/api/trees');
        const data = await fetchData.json();
        const dataStripped = data.map(element => {
            return element.name.toLowerCase();
        });
        setData(dataStripped);
    }

    const [data, setData] = useState([]);
    const [letterFields, setLetterFields] = useState(<i>initial value of setLetterFields</i>);
    const [gameStateAlert, setGameStateAlert] = useState('Click to start!');
    const [isGameOngoing, setIsGameOngoing] = useState(false);

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
        const secretWord = data[Math.floor(Math.random() * data.length)].split('');
        const initiallyDisplayedLetter = secretWord[Math.floor(Math.random() * secretWord.length)];
        setLetterFields(secretWord.map((letter, index) => {
            return (
                <span 
                    className="letter-field"
                    key={'letter-field-' + index}
                >
                    {letter === initiallyDisplayedLetter ? letter : ''}
                </span>
            );
        }));
        setGameStateAlert('Guess the word to prevent the man from becoming a SPACEman!');
        setIsGameOngoing(true);
        dispatch({ type: 'ENABLE_ALL', except: initiallyDisplayedLetter });
    }

    function verifyLetter(e) {
        console.log(e.target.name);
    }

    return (
        <div>
            <h1>Spaceman</h1>
            <SpacemanPicture/>
            <SecretWord letterFields={letterFields}/>
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