import React, { useState } from 'react';

export default function DifficultySettings( { isGameOngoing }) {

    const [hardDifficulty, setHardDifficulty] = useState(false);

    return (
        <div className="difficulty-settings">
            <span>Difficulty: </span>
            <select 
                onChange={e => {setHardDifficulty(e.target.value)}}
                disabled={isGameOngoing ? 'disabled' : ''}
            >
                <option value={false}>Easy</option>
                <option value={true}>Hard</option>
            </select>
        </div>
    );
}