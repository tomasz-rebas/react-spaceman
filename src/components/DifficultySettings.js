import React from 'react';

export default function DifficultySettings() {
    return (
        <div className="vertical-margin">
            <span>Difficulty: </span>
            <select>
                <option>Easy</option>
                <option>Hard</option>
            </select>
        </div>
    );
}