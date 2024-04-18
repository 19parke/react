import React, { useState } from 'react';

const Name = () => {
    const [name, setName] = useState("Initiate")

    const writeText = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <p>{name}</p>
            <input type="text" onChange={writeText}/>
        </div>
    );
};

export default Name;