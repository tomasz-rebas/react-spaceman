import React, { useState, useEffect } from 'react';

export default function SecretWord({ letterFields }) {

    return (
        <div className="secret-word">
            {letterFields}
        </div>
    );
}