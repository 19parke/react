import React, { useRef, useState } from 'react';

// 실습 한글 음식명, 영어 음식명을 입력하면
// 아래 결과에서 한글 음식명(영어 음식명)으로 표현하는 리스트 구현
// 리스트에서 체크박스로 삭제 버튼을 누르면 
// 해당 리스트가 삭제

const FoodContainer = () => {

    const [result, setResult] = useState([])
    const inputRef = useRef([])
    const formRef = useRef()

    const checkList = []
    // const inputEngRef = useRef()

    const addList = (e) => {
        // console.log(inputRef.current[0].value)
        // let kor = inputRef.current[0].value
        // let eng = inputRef.current[1].value
        // let fullString = "<input type='checkbox'/>"+kor+" ("+eng+")"
        // setResult(result.concat(fullString))

        
    }

    const deleteList = (e) => {
        if(e.target.checked){

        }
    }

    return (
        <div>
            <form action="#" ref={formRef}>
                <div><input type="text" name="kor" ref={(element)=>{inputRef.current[0] = element}}/></div>
                <div><input type="text" name="eng" ref={(element)=>{inputRef.current[1] = element}}/></div>
                <button type="button" onClick={addList}> 추가 </button>
                <button type="button" onClick={deleteList}> 삭제</button>
            </form>
            <div>
                {result.map((result, i)=><p key={i}>{result}</p>)}
            </div>
            {/* <div>
                <input type="text" ref={inputKorRef}/>
                <input type="text" ref={inputEngRef}/>
            </div> */}
        </div>
    );
};

export default FoodContainer;