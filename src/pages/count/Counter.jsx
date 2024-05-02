import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../../redux/modules/count';

// Counter 컴포넌트
const Counter = () => {
    // state값 가져오기, 현재 state에 number가 들어있음
    const number = useSelector((state)=>state.number)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{number}</h1>
            <div className="">
                {/* button은 UI에 해당 된다. 그래서 trigger(event)가 발생하면 onClick함수가 실행되기 때문에 dispatch로 타입을 틀고 가야 한다. */}
                <button onClick={()=> dispatch(decrease())}>-1</button>
                <button onClick={()=> dispatch(increase())}>+1</button>
            </div>
        </div>
    );
};

export default Counter;

// Store가 number를 가지고 있다가 (구독하고 있다가) 화면에 뿌려줌