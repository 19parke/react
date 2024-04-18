import React, { useState } from 'react';

const Count = () => {

    // 여러 속성들 중에서 뽑아내기 때문에 비구조화 할당
    // 변수, 상태 변화를 위한 setter 메서드 = useState('초기값')
    const[number, setNumber] = useState(0)

    const increase = () => {

        setNumber(number+1)

        // 값을 증가시키기 전에 현재 값을 반환, setNumber 함수에서 기대하는 동작과 맞지 않다
        // setNumber(number++)
    }

    const decrease = () => {
        setNumber(number-1)
    }

    return (
        <div>
            <button onClick={decrease}>감소</button>
            {number}
            <button onClick={increase}>증가</button>
        </div>
    );
};

export default Count;