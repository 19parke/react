import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bigger, changeFont } from '../../redux/modules/font';

const FontButtonComponent = () => {
    // state값 가져오기 , store를 사용하는 로직이 필요한 부분, 가져다 쓸거야! = useSelector
    // state는 redux를 무조건 가져온다 (redux는 1개여서)
    const fontSize = useSelector((state)=>state.fontSize)
    // == const fontSize = {fontSize:"1rem"} 
    const dispatch = useDispatch();


    // 내 연습 실습 코드
    // const myFontSize = useSelector((state)=>state.myFontSize)
    // const dispatch = useDispatch()
    return (
        <div>
            {/* <p style={{fontSize : `${myFontSize}rem`}}>재미있는 리덕스 수업!</p> */}
            {/* <button onClick={()=> dispatch(changeFont)}>폰트 크기 변경</button> */}
            <p style={{fontSize:fontSize}}>재미있는 리덕스 수업😵‍💫</p>
            <button onClick={()=>dispatch(bigger())}>폰트 사이즈 변경</button>
        </div>
    );
};

export default FontButtonComponent;