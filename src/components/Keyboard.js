import React, { useReducer } from 'react';

export default function Keyboard() {

    function keyboardReducer(state, action) {
        switch (action.type) {
            case "DISABLE_ONE": {
                const alteredButtons = state.map((letter, index) => {
                    if (index === action.index) {
                        return [letter[0], false];
                    } else {
                        return letter;
                    }
                });
                return alteredButtons;
            }
            case "DISABLE_ALL": {
                const disabledButtons = state.map(letter => {
                    return [letter[0], false];
                });
                return disabledButtons;
            }
            case "ENABLE_ALL": {
                const enabledButtons = state.map(letter => {
                    return [letter[0], true];
                });
                return enabledButtons;
            }
            default: {
                return state;
            }
        }
    }

    const [letters, dispatch] = useReducer(keyboardReducer, [
        ['q', true], ['w', true], ['e', true], ['r', true],
        ['t', true], ['y', true], ['u', true], ['i', true],
        ['o', true], ['p', true], ['a', true], ['s', true],
        ['d', true], ['f', true], ['g', true], ['h', true],
        ['j', true], ['k', true], ['l', true], ['z', true],
        ['x', true], ['c', true], ['v', true], ['b', true],
        ['n', true], ['m', true]
    ]);

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