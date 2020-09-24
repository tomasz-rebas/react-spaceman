import React from 'react';

export default function DifficultySettings( { isGameOngoing, setDifficulty }) {

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