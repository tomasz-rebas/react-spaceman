import React from 'react';

export default function SecretWord( { secretWordData, category, isFirstGameStarted } ) {

    const letterFields = secretWordData.map((element, index) => {
        return (
            <span 
                className="letter-field"
                key={'letter-field-' + index}
                value={element.letter}
            >
                {element.visible ? element.letter : ''}
            </span>
        );
    });

    return (
        <div className="secret-word">
            <p>{isFirstGameStarted ? 'Category: ' + category : ''}</p>
            <div>
                {letterFields}
            </div>
        </div>
    );
}