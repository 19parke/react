import React from 'react';

const Food = ({food}) => {
    console.log(food)
    const {id, name} = food;
    return (
        <div>
            {id}, {name}
        </div>
    );
};

export default Food;