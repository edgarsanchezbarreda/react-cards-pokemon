import React, { useState } from 'react';

export const useFlip = (initialState = true) => {
    const [state, setState] = useState(initialState);

    const flipCard = () => {
        setState(state => !state);
    };
    return [state, flipCard];
};
