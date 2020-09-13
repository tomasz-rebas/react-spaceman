import React, { useState } from 'react';
import data from '../data';

export default function SecretWord() {
    const [secretWord, setSecretWord] = useState(getRandomWord());
    const letterFields = secretWord.map(letter => {
        return <span className="letter-field">{letter}</span>
    });
    return (
        <div className="secret-word">
            {letterFields}
        </div>
    );
}

function getRandomWord() {
    // use split so we can work with array of chars
    return data[Math.floor(Math.random() * data.length)].split('');
}