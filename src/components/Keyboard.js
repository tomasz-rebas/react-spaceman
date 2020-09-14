import React, { useState } from 'react';

export default function Keyboard() {

    const [letters, setLetters] = useState([
        ['q', true],
        ['w', true],
        ['e', true],
        ['r', true],
        ['t', true],
        ['y', true],
        ['u', true],
        ['i', true],
        ['o', true],
        ['p', true],
        ['a', true],
        ['s', true],
        ['d', true],
        ['f', true],
        ['g', true],
        ['h', true],
        ['j', true],
        ['k', true],
        ['l', true],
        ['z', true],
        ['x', true],
        ['c', true],
        ['v', true],
        ['b', true],
        ['n', true],
        ['m', true]
    ]);

    return (
        <div className="keyboard">
            {letters.map((letter, index) => {
                if (letter[0] === 'p' || letter[0] === 'l') {
                    return (
                        <span key={letter[0]}>
                            <button 
                                disabled={letter[1] ? '' : 'true'}
                            >
                                {letter[0]}
                            </button>
                            <br/>
                        </span>
                    )
                } else {
                    return (
                        <span key={letter[0]}>
                            <button 
                                disabled={letter[1] ? '' : 'true'}
                            >
                                {letter[0]}
                            </button>
                        </span>
                    )
                }
            })}
        </div>
    );
}