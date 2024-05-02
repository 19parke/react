// {}넣는 이유 : styled-components에서 여러 모듈 중에 하나를 가져오는 것이므로 비구조화 할당이니까 
import { createGlobalStyle } from 'styled-components'

// styled-reset에서 이미 reset 설정이 있다. 변수 하나이기 때문에 중괄호 없다. 가져다가 사용하는 것
import reset from 'styled-reset'

// 앞글자를 대문자로 했다는 것은  컴포넌트란 의미 
// 어떤 페이지에서 무조건 들어가야 하는 스타일 : 초기화 = reset 할때 들억나다. 기본적인 속성들을 넣는다.
const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        /* border로 넣는것 까지 해서 100으로 맞춰주는 설정 */
        box-sizing: border-box;
        text-shadow: 0px 0px 0px rgba(0,0,0,0.1);
        letter-spacing: 0.2px;
        text-decoration: none;
        color: #131313;
    }

    button {
        border : none;
    }
`

export default GlobalStyle;