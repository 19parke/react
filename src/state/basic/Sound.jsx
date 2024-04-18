import React, { useState } from 'react';

// React에서는 상태가 변하지 않는 이상 절대 변하지 않는다! 
// 상태가 먼저 변해야 한다. 
/*
1. 불변성의 원칙 : 홈페이지가 로딩 되면 바뀌면 안 된다. 
어떤 값을 변경하고 싶으면 상태를 이용해서, 상태를 이용해서 변경

더욱 쉽게 쓸 수 있는 것들을 배울 것이지만 , 더 쉽다고 다 때력박으면 안된다. 
이걸 왜 쓰지 , 목적에 맞게 사용해야 한다. 
props -> context -> redux
*/

const Sound = () => {
    // 강아지 버튼, 고양이 버튼
    // 강아지 버튼을 눌렀을 때 강아지의 울음소리가 나오도록 출력
    // 고양이 버튼을 눌렀을 때 고양이 울음소리가 나오도록 출력

    // useState 훅을 사용하면, React는 해당 상태 변수(sound)와 그 값을 변경할 수 있는 함수(setSound)를 제공
    // 상태 변수는 컴포넌트 내부의 상태를 나타내며, 이 상태가 변경될 때마다 React는 컴포넌트를 다시 렌더링
    const [sound, setSound] = useState("")
    const dogSound = () => {
        // 함수에서 직접 sound 변수를 참조하지 않더라도, setSound 함수를 호출하는 것만으로도 상태의 변경이 일어나고, 이 변경은 React에 의해 감지
        setSound("오늘은 수요일이라 화난다 멍멍! 🐶")
    }

    const catSound = () => {
        setSound("오늘은 수요일이라 나른하다 야옹! 🐱")
    }
    
    return (
        <div>
            {/* 반응형으로 업데이트되는 이유는 React의 상태 관리 방식 때문 */}
            <p>{sound}</p>
            {/* {sound}변수를 작성하지 않으면 버튼을 아무리 눌러도 실행되지 않는다 */}
            {/* <p></p> */}
            {/* onClick 다음에 내가 사용하기 싶은 함수를 넣고 연산이기 때문에 {} 중괄호 */}
           <button onClick={dogSound}>강아지 버튼</button>
           <button onClick={catSound}>고양이 버튼</button>
        </div>
    );
};

export default Sound;