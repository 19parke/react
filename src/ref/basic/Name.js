import React, { useRef, useState } from 'react';

// 사용자가 입력한 이름을 p태그에 실시간으로 작성되도록 구현
// 버튼을 클릭하면 이름 뒤에 "님"이 붙도록 구현
// 입력 후 p태그에 반영

const Name = () => {

    const [result, setResult] = useState()
    const inputRef = useRef()
    const nameRef = useRef()
    
    const onChangeSetName = (e) => {
        return setResult(e.target.value)
    }

    const onClickPutName = () => {
        // setResult(nameRef.current.innerText+"님")
        setResult(inputRef.current.value+"님")
    }

    return (
        // 돔을 한 개로 만들기 위해
        <React.Fragment>
            <p ref={nameRef}>{result}</p>
            <input type="text"onChange={onChangeSetName} ref={inputRef} value={result}/>
            <button onClick={onClickPutName}>완료 버튼</button>
        </React.Fragment>
    );
};

export default Name;