// 설치한 모듈에서 가져오기 때문에 비구조화 할당
import {createAction, handleActions} from 'redux-actions'

// actions : 무엇이 발생했는지 알기 위한 트리거
// 분리 하기 위해 increase라는 타입을 만든 것
// 모듈 count에서 발생한 action이다.
// action이 아니고 action이 발생했을 때의 타입이 increase
const INCREASE = "count/INCREASE";
const DECREASE = "count/DECREASE";

// action을 생성, 모듈 import위에 해줘야 사용가능
// action을 생성한거고 INCREASE라는 타입을 들고 간 것이다.
// action은 UI에서 발생, 외부 - 그래서 export
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// state 초기 값 설정 , store의 값들
const initialState = {
    number : 0
}


// reducer는 action을 받고 비교
// state도 바꿔줘야 하기 때문에 둘 다 받는다
// reducer는 타입 분류
// 리듀서 생성

// [사용방법 1]
// const reducer = (state, action) => {
//     switch (action) {
//         case INCREASE : 
//             action.setNumber(state.number+1)
//         case DECREASE : 
//             action.setNumber(state.number-1)
//     }
// }

// [사용방법 2]
// reducer 제작, 여러 action을 받았을 때 분깃 처리 할 수 있게끔 하는 훅 함수가 handleActions
const count = handleActions({
    // INCREASE면 state, action 받아서 number의 상태 값을 바꿔줌
    [INCREASE] : (state, action) => ({number : state.number+1}), 
    [DECREASE] : (state, action) => ({number : state.number-1}),
}, initialState)

export default count;

// Redux는 1개만, 모든 컴포넌트를 감쌀 수 있을 수 있도록 
// 보통 index.js나 App.js