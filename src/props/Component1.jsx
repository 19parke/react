import React from 'react';

const Component1 = (props) => {
    console.group(props)
    // const name = '박은혜';
    return (
        <div>
            저의 이름은 {props.name}입니다. 
        </div>
    );
};

export default Component1;