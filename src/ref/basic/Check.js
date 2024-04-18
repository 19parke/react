import React, { useRef } from 'react';

// 유효성 체크

const Check = () => {

    // inputRef는 초기 값으로 빈 배열 []을 가진 ref 객체를 생성
    const inputRef = useRef([]);
    const formRef = useRef();

    const onClickToCheck = () => {
        //  각각의 입력필드가 저장되어 있는 current배열의 값을 확인
        for(let input of inputRef.current){
            // 값이 없으면
            if(!input.value){
                console.log(input.name+" error")
                // return을 해주지 않으면 밑에거가 그대로 실행되기 때문에 멈추지 않는다. 
                return
            }
        }
        // 폼 전체 전송
        formRef.current.submit()
    }

    return (
        <div>
            <form ref={formRef}>
                {/* f1 누르고 Emmet 약어로 래핑 : 감싸주는 역한 한 번에 */}
                <div>
                    {/* 배열로 여러개를 전달할 때  */}
                    {/* element는 참조된 입력 필드(<input>)의 실제 DOM 요소 */}
                    {/* 첫 번째 입력 필드의 참조를 배열의 첫 번째 요소로 설정 */}
                    {/* inputRef.current[0]을 통해 첫 번째 입력 필드의 DOM 요소에 접근 */}
                    <span>아이디</span><input name="id" ref={(element)=>{inputRef.current[0] = element}}></input>
                </div>
                <div>
                    <span>비밀번호</span><input name="password" ref={(element)=> {inputRef.current[1] = element}}></input>
                </div>
                <button onClick={onClickToCheck} type="button"> 전송 </button>
            </form>
        </div>
    );
};

export default Check;