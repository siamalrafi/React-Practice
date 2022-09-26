import React, { useEffect, useState } from 'react';
import Five from '../Five/Five';

const Four = () => {
    const [cosmatics, setCosmatics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmatics(data))
    }, []);

    return (
        <div>
            {cosmatics.map(cosmatic => <Five cosmatic={cosmatic}></Five>)}

        </div>
    );
};

export default Four;