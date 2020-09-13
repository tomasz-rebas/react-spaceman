import React, { useState } from 'react';
import data from '../data';

export default function SecretWord() {
    const [secretWord, setSecretWord] = useState(getRandomWord())
    return (
        <div className="secret-word">The secret word.</div>
    );
}

function getRandomWord() {
    return data[Math.floor(Math.random() * data.length)];
}