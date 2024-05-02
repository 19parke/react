import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputBigger } from '../../redux/modules/font';

// 사용자에게 입력받은 폰트 사이즈로
// 폰트 크기를 변경하기

const FontInputComponent = () => {
    // redux 가져오기, 사용한다~이제쓴다~
    const fontSize = useSelector((state)=>state.fontSize)
    const dispatch = useDispatch();
    
    const [value, setValue] = useState("");
    const onChangeInput = (e) => {setValue(e.target.value)}
    // console.log(value);

    // const onKey

    return (
        <div>
            <h1 style={{fontSize:fontSize}}>1조, 2조 조장 축하합니다😊</h1>
            <input type="text" 
            placeholder='글자 크기를 입력하세요. ex) 1rem'
            value={value}
            onChange={onChangeInput}/>
            {/* value가 payload action이 날아갈 때 들고 가는 value값 */}
            <button onClick={()=>dispatch(inputBigger(value))}>커져라 버튼!</button>
        </div>
    );
};

export default FontInputComponent;