import React from 'react';

export default function SpacemanPicture({ drawingStageIndex, drawingStageList }) {
    const sizeMultiplier = 0.6;
    return (
        <img 
            src={`images/stage_${drawingStageList[drawingStageIndex]}.png`}
            alt="Spaceman"
            width={300 * sizeMultiplier}
            height={400 * sizeMultiplier}
        />
    );
}