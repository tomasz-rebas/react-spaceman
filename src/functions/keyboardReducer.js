export default function keyboardReducer(state, action) {
    switch (action.type) {
        case "DISABLE_ONE": {
            const alteredButtons = state.map((letter, index) => {
                return index === action.index ? [letter[0], false] : letter;
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
                return letter[0] === action.except ? [letter[0], false] : [letter[0], true];
            });
            return enabledButtons;
        }
        default: {
            return state;
        }
    }
}