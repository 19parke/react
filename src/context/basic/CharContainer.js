import React from 'react';
import A from './A';
import CharContext from '../CharContext';

// 최상위 컴포넌트는 Context를 제공해주는 역할, 하위 컴포넌트들이 만든  value 값에 접근할 수 있도록
const CharContainer = () => {
    // name을 전달해서 C.jsx에서 출력하고 싶다.
    const name = "박은혜";
    return (
        <div>
            {/* Theme했을 때 감싼 것 처럼 똑같이 감싸준다. 제공하기 때문에 Provider로 감싸기 */}
            {/* CharContext에 넣어놓은 것이 없기 때문에 value값 전달, 밑에 있는 모든 props값 사용 가능 */}
            <CharContext.Provider value={{fontSize : "2rem"}}>
                {/* 이 밑에 있는 모듬 컴포넌트들, 즉 A~C까지 fontSize 사용 가능 */}
                <A />
                {/* <A name={name}/> 그러나 계속 타고타고 전달하면 번거로움*/}
            </CharContext.Provider>
        </div>
    );
};

export default CharContainer;