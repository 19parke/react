import React, { createContext, useState } from 'react';

// export const FontSizeContext = createContext({
    // 전달할 value들
//     fontSize : "5rem",
//     color : "blue"
// })
// 어차피 전달할 것이라면 미리 전달하면 되지 않을까? 

// 초기화
export const FontSizeContext = createContext({
    state : { fontSize : "" },
    action : { setFontSize : ()=>{} }
})


{/* <CharContext.Provider value={{fontSize : "2rem"}}> */}
// 이거를 통째로 묶어서 컴포넌트로 사용하는 것임

// FontSizeContext.Provider 이거 사용하는 대신에 
// FontSizeProvider로 감싸지는 자식요소를 children으로 받고
// FontSizeContext.Provider 감싸주는 컴포넌트 생성 자식요소 받고{children} 전달해주기
// 감싸져 있는 A 컴포넌트가 들어올 것이다
const FontSizeProvider = ({children}) => {

    const [fontSize, setFontSize] = useState("3rem");

    // value미리 전달해주기
    const value = {
        // 3rem초기값 들어갔고 
        state : {fontSize},
        // 상태를 바꾸는 것이므로 위에 useState사용
        action : {setFontSize}
    }

    // 컴포넌트의 기본적인 구성
    return (
        // value미리 전달해주기
        <FontSizeContext.Provider value={value}>
            {/* 버튼 만든 것처럼 children을 받고 전달 */}
            {children}
        </FontSizeContext.Provider>
    )
}

// 컴포넌트 같이 사용
const FontSizeConsumer = FontSizeContext.Consumer;

// 외부에서 사용 export, 여러개를 내보내므로 객체로 묶음
export {FontSizeProvider, FontSizeConsumer}