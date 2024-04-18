import React, { useState } from 'react';

// 체크박스 클릭 시 문자가 나오고 
// 클릭 해제시 없어지기

const Checkbox = () => {

    const [message, setMessage] = useState([])

    // event 객체를 받고
    const onClickToCheck = (e) => {
        // event 객체 안에서 체크박스가 체크되어 있으면
        if(e.target.checked){
            // 객체의 value값 가져오기
            let value = e.target.value

            // 상태변화 시켜서 message 변수 변화시키기 
            // concat 함수를 사용해 value 값 문자열로 더하기
            setMessage(message.concat(value))
            // setMessage([...message, value])
        }else{
            // 체크가 해제 되었을 때 
            // [복습] filter 배열의 요소를 순회하면서 콜백 함수를 사용하여 원하는 조건에 따라 필터링하는 함수, 필터링된 배열로 반환
            // 체크 해제했을 때 클릭->체크해제 확인->가져온 이벤트에서 해당 문자열이 아닌 것 필터링해서 반환
            setMessage(message.filter((message)=>message !== e.target.value))
        }

    }

    return (
        <div>
            <div>
                <span>front-end</span><input type="checkbox" value="front-end" onClick={onClickToCheck}/>
            </div>
            <div>
                <span>back-end</span><input type="checkbox" value="back-end" onClick={onClickToCheck}/>
            </div>
            <div>
                <span>ai</span><input type="checkbox" value="ai" onClick={onClickToCheck}/>
            </div>
            <h1>{message.map((message, i)=><p key={i}>{message}</p>)}</h1>
        </div>
    );
};

export default Checkbox;