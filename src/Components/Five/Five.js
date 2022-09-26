import React from 'react';

const Five = (props) => {
    const { age, name, company } = props.cosmatic;
    return (
        <div>
            <h2>Name : -- {name}</h2>
            <p>Age : --{age}</p>
            <p>Company : --{company}</p>
        </div>
    );
};

export default Five;