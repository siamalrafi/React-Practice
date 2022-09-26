import React from 'react';

const Three = (props) => {
    const { id, age, company, name } = props.cosmatic;
    return (
        <div>
            <h3 style={{ color: 'red' }}>This is the : --{id} </h3>
            <p>Age --{age}</p>
            <p style={{ color: 'red' }}>Company --{company}</p>
            <p>Name :  --{name}</p>
        </div>
    );
};

export default Three;