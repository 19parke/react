import React, { useRef } from 'react';
import Format from './Format';

const PracticeInput = () => {

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
            <Format style={style} inputsRef={inputsRef} formRef={formRef} onClickInputValue={onClickInputValue}/>
        </div>
    );
};

export default PracticeInput;