import React from 'react';

export default function SecretWord( { secretWordData, category, isFirstGameStarted, guessesLeft } ) {

    const letterFields = secretWordData.map((element, index) => {
        return (
            <span 
                className="letter-field"
                key={'letter-field-' + index}
                value={element.letter}
                style={element.autofilled ? {color: "lightsalmon"} : {}}
            >
                {element.visible ? element.letter : ''}
            </span>
        );
    });

    return (
        <div>
            <p>{isFirstGameStarted ? 'Category: ' + category : ''}</p>
            <p>{isFirstGameStarted ? 'Guesses left: ' + guessesLeft : ''}</p>
            <div className="secret-word">
                {letterFields}
            </div>
        </div>
    );
}