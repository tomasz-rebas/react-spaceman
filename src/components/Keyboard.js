import React from 'react';

export default function Keyboard({ letters, dispatch, verifyLetter }) {

    return (
        <div className="keyboard">
            {letters.map((letter, index) => {
                return (
                    <span key={letter[0]}>
                        <button
                            disabled={letter[1] ? false : true}
                            name={letter[0]}
                            onClick={(e) => {
                                dispatch({ type: 'DISABLE_ONE', index: index });
                                verifyLetter(e);
                            }}
                            className="keyboard-button"
                        >
                            {letter[0]}
                        </button>
                        {letter[0] === 'p' || letter[0] === 'l' ? <br/> : ''}
                    </span>
                );
            })}
        </div>
    );
}