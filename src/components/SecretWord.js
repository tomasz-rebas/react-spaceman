import React from 'react';

export default function SecretWord( { secretWordData, category, isGameOngoing } ) {

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
        <div>
            <p>{isGameOngoing ? 'Category: ' + category : ''}</p>
            <div className="secret-word">
                {letterFields}
            </div>
        </div>
    );
}