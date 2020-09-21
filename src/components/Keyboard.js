import React from 'react';

export default function Keyboard({ letters, dispatch }) {

    return (
        <div className="keyboard">
            {letters.map((letter, index) => {
                return (
                    <span key={letter[0]}>
                        <button
                            disabled={letter[1] ? false : true}
                            onClick={() => {
                                dispatch({ type: 'DISABLE_ONE', index: index })
                            }}
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