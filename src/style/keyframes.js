// 가져오기
import { keyframes } from "styled-components";

// 내보내기 export
export const fadeIn = keyframes`
/* 0~100까지 작업 */
    0%{
        opacity: 0;
        transform: translate(0, -30px);
    }
    100%{
        opacity: 1;
        transform: translate(0, 0);
    }
`