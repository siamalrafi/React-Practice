import React from 'react';
import { add } from './Function/Function';

const One = () => {
    const first = 55;
    const second = 44;
    const total = add(first,second)
    return (
        <div>
            <h3>The Valeu is {total}</h3>

        </div>
    );
};

export default One;