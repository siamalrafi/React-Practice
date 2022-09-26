import React from 'react';
import Three from '../Three/Three';

const Tow = () => {
    const cosmatics = [
        {
            "id": "6331a68a50a386c966cbc3e5",
            "age": 23,
            "name": "Augusta Simon",
            "company": "COLAIRE"
        },
        {
            "id": "6331a68a2e1882aa616832f7",
            "age": 33,
            "name": "Alisha Gibbs",
            "company": "EVENTEX"
        },
        {
            "id": "6331a68a3b292e814e251092",
            "age": 26,
            "name": "Mays Richardson",
            "company": "OATFARM"
        },
        {
            "id": "6331a68a3b2a599e09b66dd8",
            "age": 31,
            "name": "Ruth Reeves",
            "company": "INTERLOO"
        },
        {
            "id": "6331a68abe3fc9cc8e1a3f8b",
            "age": 30,
            "name": "Daugherty Walls",
            "company": "ZIORE"
        }
    ]

    return (
        <div>
            <h1>This is the Two</h1>
            {
                cosmatics.map(cosmatic => <Three
                    key={cosmatic.id}
                    cosmatic={cosmatic}
                ></Three>)
            }

        </div>
    );
};

export default Tow;