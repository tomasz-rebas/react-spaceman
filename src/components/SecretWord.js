import React from 'react';

export default function SecretWord( { secretWordData } ) {

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
            {letterFields}
        </div>
    );
}