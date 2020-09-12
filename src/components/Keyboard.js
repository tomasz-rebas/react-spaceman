import React from 'react';

export default function Keyboard() {

    const firstRowLetters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const secondRowLetters = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const thirdRowLetters = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

    const firstRowButtons = getButtons(firstRowLetters);
    const secondRowButtons = getButtons(secondRowLetters);
    const thirdRowButtons = getButtons(thirdRowLetters);

    return (
        <div className="keyboard">
            <div>{firstRowButtons}</div>
            <div>{secondRowButtons}</div>
            <div>{thirdRowButtons}</div>
        </div>
    );
}

function getButtons(letters) {
    return letters.map(letter => {
        return <button>{letter}</button>
    })
}