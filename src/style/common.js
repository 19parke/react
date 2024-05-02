// 가져다가 사용할 수 있게끔 import
import { css } from "styled-components";

// 해당 파일에는 공통된 속성을 넣는다.

// 외부에서 사용할 것이기 때문에 export
export const flexCenterColumn = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const textH1 = css`
    font-size: 40px;
    font-weight: 900;
    /* 자간 크기 */
    letter-spacing: -0.1px;
`