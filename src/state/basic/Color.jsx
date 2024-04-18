import React, { useState } from 'react';

// 빨간색 버튼을 누르면 글자색을 빨갛게 
// 파란색 버튼을 누르면 글자색을 파랗게 
// 핑크색 입력 시 글자의 색깔을 없앤다

const Color = () => {

    const [result, setResult] = useState()
    const [color, setColor] = useState()

    const changeResult = (e) => {
        // return 되는 컴포넌트 밖이므로 if문 사용가능
        if(e.target.value==='핑크색'){
            setColor("")
        }
        return setResult(e.target.value)
    }

    // event 객체는 사용하지 않으므로 굳이 적을 필요는 없다.
    const changeRed = (/*e*/) => {
        setColor("red")
    }

    const chnageBlue = () => {
        setColor("blue")
    }

    return (
        <div>
            {/* 
            React에서 style 속성에 스타일을 지정할 때, 스타일 속성들은 JavaScript 객체로 표현
            객체를 지정하는 방법은 중괄호 {}를 사용
            color는 문자열 값이며, 이는 style 속성이 예상하는 객체 형식이 아님. 
            React는 style 속성으로 객체를 받기를 기대 
            color가 "red"라면, style={color}는 style="red"와 같은 형태로 해석
             올바른 JavaScript 객체가 아니므로 React에서 에러*/}
             {/* 
             style={{color}}에서 바깥쪽 {}는 JavaScript의 객체를 생성, 
             내부 {}는 해당 객체 내에서 color라는 키에 color 변수의 값을 할당 style={{color: color}}
             color 키는 CSS 속성을 나타내고, color 값(예: "red")은 color 상태 변수에서 동적으로 받은 값
             객체로 스타일을 정의함으로써 React는 예상대로 스타일 객체를 받아 컴포넌트에 적용*/}
            <p style={{color}}>{result}</p>
            <div><input type="text" onChange={changeResult}/></div>
            <button onClick={changeRed}>빨간색 버튼</button>
            <button onClick={chnageBlue}>파란색 버튼</button>
        </div>
    );
};

export default Color;