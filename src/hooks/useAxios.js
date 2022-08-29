import React, { useState } from 'react';
import axios from 'axios';
import uuid from 'uuid';

export const useAxios = (baseUrl, initialState = []) => {
    const [state, setState] = useState(initialState);

    const addCard = async (restOfUrl = '') => {
        const response =
            restOfUrl.length > 0
                ? await axios.get(`${baseUrl}${restOfUrl}`)
                : await axios.get(baseUrl);

        setState(state => [...state, { ...response.data, id: uuid() }]);
    };

    return [state, addCard];
};
