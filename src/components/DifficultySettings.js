import React from 'react';

export default function DifficultySettings( { isGameOngoing, setDrawingStageList }) {

    function setDifficulty(event) {
        const hardDifficulty = (event.target.value === 'true');
        setDrawingStageList(hardDifficulty ? [1, 4, 9] : [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }

    return (
        <div className="difficulty-settings">
            <span>Difficulty: </span>
            <select 
                onChange={setDifficulty}
                disabled={isGameOngoing ? 'disabled' : ''}
            >
                <option value={false}>Easy</option>
                <option value={true}>Hard</option>
            </select>
        </div>
    );
}