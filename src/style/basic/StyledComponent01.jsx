import React from 'react';
// [버전 A] 먼저 imort 해주기 
// import styled from 'styled-components'

// [버전 B] 스타일 사용하기 위해 스타일 객체 가져오기
// 중괄호 없이 가져오는 이유 : style.js에서 보낸 것이 하나 밖에 없으니까 
import S from '../style';

// [버전 A]함수 밖에서 선언해주기
// . 함으로써 내가 만들 태그들
// const Styled = styled.div`
/* 여기 안에서는 내가 기존에 알던 css 문법 사용 가능 */
    /* width: 100px;
    height: 100px;
    border : solid 1px #333
` */
// ==> 이렇게 사용하면 하나의 파일에서 스타일 더 넣으면 보기 좋지 않다. 

// const StyledComponent01 = () => {
//     return (
        /* 스타일 된 컴포넌트이므로 컴포넌트 같이 <Styled>로 사용하면 된다. */
//      <Styled> == <div> 태그
//          스타일 된 컴포넌트입니다.
//      </Styled>
//      이렇게 하면 무엇이 스타일 컴포넌트이고 진짜 컴포넌트 인지 구분하기 어렵다 => Styled 컴포넌트에는 S를 붙이자 <S.Styled>
//      => [버전 B] 매번 사용할 것이므로 외부 선언 해놓고 가져오기
//      <Styledd/>
//     );
// };

/*
    스타일드 컴포넌트는 자바스크립트 이므로 동적으로 스타일 변화를 줄 수 있다. 
    반복되는 코드들을 외부에 선언하여 모듈로 가져올 수 있다.

                <input />
                <button><p>입력</p></button>  
*/

const StyledComponent01 = () => { 
    return ( 
        <div>
            {/* 동적으로 내가 스타일을 넣었을 때 */}
            <S.Styled color={"blue"}> 
                스타일된 컴포넌트입니다.😎 
                <input />
                <button><p>입력</p></button>  
            </S.Styled> 

            {/* styled input을 만들어서 background 컬러를 props로 pink를 받기 5분 */}
            {/* [오류] 이거의 문제!!  */}
            {/* <S.Input color={"pink"}><input/></S.Input> */}

            <ul> 
                <li>글로벌 스타일 잘 들어갔어요?</li> 
            </ul> 
            <S.Button>스타일된 버튼입니다.😁</S.Button> 
        </div> 
    ); 
}; 

export default StyledComponent01;