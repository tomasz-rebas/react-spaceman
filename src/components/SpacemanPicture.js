import React from 'react';

export default function SpacemanPicture({ drawingStage }) {
    const sizeMultiplier = 0.6;
    return (
        <img 
            src={`images/stage_${drawingStage}.png`}
            alt="Spaceman"
            width={300 * sizeMultiplier}
            height={400 * sizeMultiplier}
        />
    );
}