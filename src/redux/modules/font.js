/* 내 연습 실습 코드
import { createAction, handleActions } from "redux-actions";

// 타입 생성
const CHANGEFONT = "font/CHANGEFONT";

// action 생성
export const changeFont = createAction(CHANGEFONT);

// state의 초기값 설정, store의 초기값
const initialState = {
    size : 1
}

const myFont = handleActions({
    [CHANGEFONT] : (state, action) => ({size : state.size+2})
}, initialState)

export default myFont;
*/

import { createAction, handleActions } from "redux-actions";

// 1번 실습
// type 생성
const BIGGER = "font/BIGGER";
// action 생성, BIGGER 타입 들고 가기, 밑에서 사용하기 위해 변수에 담기
// action 밖에서 사용하므로 export
export const bigger = createAction(BIGGER)

// 2번 예제
const INPUTBIGGER = "font/INPUTBIGGER";
// 사용자의 값을 받아오기 위해 콜백 함수
export const inputBigger = createAction(INPUTBIGGER, (fontSize)=>fontSize);

/*
payload

ui -> action -> reducer

비행기 밑에 짐 넣는 공간 : action 이 reducer로 날아가는데 
날아갈때 짐처럼 값을 들고간다.
action이 reducer로 들고가는 값

*/

const initialState = {
    fontSize : "1rem"
}

const font = handleActions({
    [BIGGER] : (state, action) => ({fontSize : "3rem"}),
    // store에 있는 state값, action에 있는 payload값
    [INPUTBIGGER] : (state, action) => ({fontSize : action.payload}),
}, initialState)

export default font;