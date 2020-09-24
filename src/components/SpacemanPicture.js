import React from 'react';

export default function SpacemanPicture({ currentDrawingStage }) {
    const sizeMultiplier = 0.6;
    return (
        <img 
            src={`images/stage_${currentDrawingStage}.png`}
            alt="Spaceman"
            width={300 * sizeMultiplier}
            height={400 * sizeMultiplier}
        />
    );
}