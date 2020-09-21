import React from 'react';

export default function SecretWord( { letterFieldsData } ) {

    const letterFields = letterFieldsData.map((letter, index) => {
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