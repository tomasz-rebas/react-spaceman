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

    const [data, setData] = useState([]);
    const [secretWord, setSecretWord] = useState();
    const [letterFields, setLetterFields] = useState(<i>initial value of setLetterFields</i>);

    const fetchData = async () => {
        const fetchData = await fetch('https://www.fruitmap.org/api/trees');
        const data = await fetchData.json();
        setData(data);
    }

    const getRandomWord = () => {
        // use split so we can work with array of chars
        return data[Math.floor(Math.random() * data.length)].split('');
    }

    const startGame = () => {
        if (typeof data[0] === 'object') {
            setData(data.map(element => {
                return element.name;
            }))
        }
        setSecretWord(getRandomWord());
        setLetterFields(secretWord.map((letter, index) => {
            return <span className="letter-field" key={'letter-field-' + index}>{letter}</span>
        }));
    }

    // const letterFields = secretWord.map((letter, index) => {
    //     return <span className="letter-field" key={'letter-field-' + index}>{letter}</span>
    // });

    // https://mammaldiversity.org/api
    // https://www.fruitmap.org/api/trees
    // https://anfi.tk/greekApi/person/getAll

    return (
        <div>
            <h1>Spaceman</h1>
            <SpacemanPicture/>
            <SecretWord/>
            <Keyboard/>
            <GameStateAlert/>
            <StartButton/>
            <DifficultySettings/>
        </div>
    );
}