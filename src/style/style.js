import styled from "styled-components";
import { flexCenterColumn } from "./common";

// 우리가 컴포넌트에서 <S.Styled> 이렇게 스타일 컴포넌트로 사용할 것이므로 
// S를 객체로 만들어서 보내기
const S = {}

// S. 사용할 것으미로 객체 안에서 선언 

S.Styled = styled.div`
    width: 300px;
    height: 300px;
    border: solid 1px #333;
    /* 동적으로 스타일을 받을 때 , color는 키값 */
    background-color: ${(props) => props.color};
    /* props에서 받은 값을 사용하는 것이기 때문에 , background-color로 바로 return을 해줘야 하기 때문에 color값이 null이면 안된다.  */
    /* 그래서 밑에와 같이 props.color를 {} 로 감싸면 안된다. background의 값이 필요하니까. 중괄호가 있을 때는 return 이 아니니까
    (함수선언의 기능적인 것) */

    /* 공통된 속성 넣기(묶어 넣고 클래스로 사용하는 것 처럼) */
    ${flexCenterColumn}

    
    /* & 자기 자신 선택자 - S.Styled 태그 안에 자식 태그가 안에 있으면 따로 style.js가서 S.input..등을 만들어주는 것이 아니다*/
    /* 내가 가진 자식요소들 중에서 , Styled Component 밑에 있는 input 태그는 이렇게 바꿔줘~  */
    & input {
        background: #333;
    }
    & button {
        background-color: pink;

        & p {
            color: red;
        }
    }

`

S.Input = styled.input`
    background-color: ${(props)=>props.color};
`

S.Button = styled.button`
    background-color: orchid;
    border: none;
`

// S.Styled = styled.div`
//     width: 300px;
//     height: 300px;
//     border: solid 1px #333;
//     background-color: ${(props) => props.color};
//     ${flexCenterColumn}

//     /* & 자기 자신 선택자 */
//     & input {
//         background: #333;
//     }

//     & button {
//         background-color: pink;

//         & p {
//             color: red;
//         }
//     }
// `
// S.Button = styled.button`
//     background-color: orchid;
//     border: none;
//     ${flexCenterColumn}
//     font-size: ${({theme}) => theme.FONT_SIZE["h1"]};

// `

// S 객체 보내기
export default S;