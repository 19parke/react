import React, { useState } from 'react';

const useInput = (initialValue) => {
    const [input, setInput] = useState(initialValue)

    const onChangeInput = (e) => {
        // 상태를 바꿔주기 위해
        setInput(e.target.value)
    }

    return [input, onChangeInput];
};

export default useInput;