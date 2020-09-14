import React, { useState, useEffect } from 'react';
import SpacemanPicture from './SpacemanPicture';
import SecretWord from './SecretWord';
import Keyboard from './Keyboard';
import GameStateAlert from './GameStateAlert';
import StartButton from './StartButton';
import DifficultySettings from './DifficultySettings';

export default function App() {
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const fetchData = await fetch('https://www.fruitmap.org/api/trees');
        const data = await fetchData.json();
        const dataStripped = data.map(element => {
            return element.name;
        });
        setData(dataStripped);
    }

    const [data, setData] = useState([]);
    const [letterFields, setLetterFields] = useState(<i>initial value of setLetterFields</i>);
    const [gameStateAlert, setGameStateAlert] = useState('Click to start!');
    const [isGameOngoing, setIsGameOngoing] = useState(false);

    function startGame() {
        const secretWord = data[Math.floor(Math.random() * data.length)].split('');
        setLetterFields(secretWord.map((letter, index) => {
            return (
                <span 
                    className="letter-field"
                    key={'letter-field-' + index}
                >
                    {letter}
                </span>
            );
        }));
        setGameStateAlert('Guess the word to prevent the man from becoming a SPACEman!');
        setIsGameOngoing(true);
    }

    // https://mammaldiversity.org/api
    // https://www.fruitmap.org/api/trees
    // https://anfi.tk/greekApi/person/getAll

    return (
        <div>
            <h1>Spaceman</h1>
            <SpacemanPicture/>
            <SecretWord letterFields={letterFields}/>
            <Keyboard/>
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