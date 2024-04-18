import React from 'react';

// 실습
// props 받아서 form 태그에 
// input 태그 4개 이름, 나이, 핸드폰번호, 이메일
// 화면 쪽에서 유효값 검사

const Form = (props) => {

    const {style, inputsRef , formRef, onClickInputValue} = props

    return (
        <div>
            <form action="#" ref={formRef} style={style}>
                <div><span>이름 : </span><input type="text" name="id" ref={(el)=>{inputsRef.current[0] = el}}/></div>
                <div><span>나이 : </span><input type="text" name="age" ref={(el)=>{inputsRef.current[1] = el}}/></div>
                <div><span>HP : </span><input type="text" name="phone" ref = {(el)=>{inputsRef.current[2] = el}}/></div>
                <div><span>E-mail :</span> <input type="text" name="email" ref = {(el)=>{inputsRef.current[3] = el}}/></div>
                <button type="button" onClick={onClickInputValue}>입력 완료</button>
            </form>
        </div>
    );
};

export default Form;