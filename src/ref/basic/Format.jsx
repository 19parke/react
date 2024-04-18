import React from 'react';

const Format = (props) => {
    const {style, inputsRef, formRef, onClickInputValue} = props

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

export default Format;