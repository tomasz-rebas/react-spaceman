import React, { useState } from 'react';

export default function Keyboard() {

    const letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 
                        'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
                            'z', 'x', 'c', 'v', 'b', 'n', 'm'];

    const [keyboardButtons, setKeyboardButtons] = useState(letters.map(letter => {
        if (letter === 'p' || letter === 'l') {
            return (
                <span key={letter}>
                    <button>{letter}</button>
                    <br/>
                </span>
            )
        } else {
            return (
                <span key={letter}>
                    <button>{letter}</button>
                </span>
            ) 
        }
    }));

    return (
        <div className="keyboard">
            {keyboardButtons}
        </div>
    );
}