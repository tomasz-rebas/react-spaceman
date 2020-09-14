import React from 'react';

export default function SpacemanPicture() {
    const sizeMultiplier = 0.6;
    return (
        <img 
            src="images/spaceman.png"
            alt="Spaceman"
            width={300 * sizeMultiplier}
            height={400 * sizeMultiplier}
        />
    );
}