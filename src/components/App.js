import React, { useState, useEffect } from 'react';
import SpacemanPicture from './SpacemanPicture';
import SecretWord from './SecretWord';
import Keyboard from './Keyboard';
import GameStateAlert from './GameStateAlert';
import StartButton from './StartButton';
import DifficultySettings from './DifficultySettings';

// state variables

// gameOngoing (true/false)

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

    function startGame() {
        const secretWord = data[Math.floor(Math.random() * data.length)].split('');
        setLetterFields(secretWord.map((letter, index) => {
            return <span className="letter-field" key={'letter-field-' + index}>{letter}</span>
        }));
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
            <GameStateAlert/>
            <StartButton startGame={startGame}/>
            <DifficultySettings/>
        </div>
    );
}