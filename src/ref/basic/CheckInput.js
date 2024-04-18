import React, { useRef } from 'react';
import Form from './Form';

/*
[ 여러 표기법 기억하기 ]
display : "flex" - 화면 표기법
flexDirection : "column", - 카멜표기법
flex-Direction : "column", - 케밥표기법
flex_Direction : "column", - 스네이크표기법
*/

const Checkinput = () => {

    const style = {
        display : "flex", 
        flexDirection : "column",
        width : "200px"
    }

    const inputsRef = useRef([])
    const formRef = useRef();
    const onClickInputValue = () => {
        for(let input of inputsRef.current){
            // 값이 없다면 
            if(!input.value){
                console.log(input.name+" error")
                return
            }
        }
        formRef.current.submit()
    }

    return (
        <div>
            <Form style={style} inputsRef={inputsRef} formRef={formRef} onClickInputValue={onClickInputValue}/>
        </div>
    );
};

export default Checkinput;