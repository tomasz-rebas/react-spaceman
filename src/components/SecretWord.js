import React from 'react';

export default function SecretWord( { secretWordData } ) {

    const letterFields = secretWordData.map((letter, index) => {
        return (
            <span 
                className="letter-field"
                key={'letter-field-' + index}
                value={letter.letter}
            >
                {letter.visible ? letter.letter : ''}
            </span>
        );
    });

    return (
        <div className="secret-word">
            {letterFields}
        </div>
    );
}