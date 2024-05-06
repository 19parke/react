import styled, { css } from "styled-components"
// 버튼과 관련된 스타일만 적용
const variantCSS = {
    primary : css`
        background-color: ${({theme})=>theme.PALLETE.background["gray"]};
    `
}

const shapeCSS = {

    default: css``,
    small: css`
        border-bottom: 10px;
    `,
    large: css`
        border-bottom: 20px;
    `,
    big: css`
        border-bottom: 30px;
    `,
    round: css`
        border-radius: 50%;
    `
}

// 사이즈에 대한 CSS
const sizeCSS = {

    // 객체 안 key값으로 사용되고 있다
    small: css`
        width: 64px;
        height: 32px;
        padding: 16px 0;
    `,
    medium: css`
        width: 96px;
        height: 48px;
        padding: 16px 0;
    `,
    large: css`
        width: 128px;
        height: 64px;
        padding: 16px 0;
    `,

    full: css`
        width: 100%;
        aspect-ratio: 8 / 1;
        padding: 16px 0;
`,
}

// 버튼을 만들었을 때 스타일된 버튼을 만들고 있음 , 그 안에서 위에서 선언했던 variant, shape, size를 return값으로 넣고 있다.
// [variant] 이런 식으로 변수로 선언되어 값이 들어가고 있다. {variant}를 받았을 때 variantCSS의 키값으로 들어가고 있다. 
const Button = styled.button`

    ${({variant}) => variantCSS[variant]}
    ${({shape}) => shapeCSS[shape]}
    /* sizeCSS의 키값으로 들어간다.  */
    ${({size}) => sizeCSS[size]}

    cursor : pointer;
`

export default Button;