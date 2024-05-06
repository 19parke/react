import React from 'react';
import Button from './style';

// 하나의 컴포넌트를 버튼 통째로 하나로, style에서 만든 버튼 return 
// BascicButton 자체를 스타일된 컴포넌트로 만들기 때문에 S를 붙이지 않음

// 컴포넌트가 사용된 부분에서 variant받을 것이기 때문에 

// onClick과 같은 어떤 메소드들이 몇 개 더 들어올지 모르기 때문에 rest 
const BasicButton = ({size, shape, variant, children, ...rest}) => {
    return (
        // 스타일된 Button 리턴한다, 받은 것들 사용하기 (size, shape..), 어떤 버튼에 어떤 옵션이 더 들어올지 모르니
        <Button size={size} shape={shape} variant={variant} {...rest}>
            {children}
        </Button>
    );
};


{/* <BasicButton>값을 입력하지 못함</BasicButton> <Button></Button> 자체가 return 되기 때문에 */}
// 그래서 children 옵션 사용 , BasicButton 컴포넌트로 둘러쌓여져 있는 자식요소 를 children이 받는다
// 그래서 "값을 입력하지 못함" 이 children으로 들어간다.

export default BasicButton;