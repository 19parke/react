import React from 'react';
import BasicButton from '../components/button/BasicButton';

const BasicContainer = () => {
    return (
        <div>
            {/* 선언 해 놓았으니 사용하기, 사이즈 키값으로 보내기 */}
            <BasicButton 
                size={"large"}
                shape={"round"}
                variant={"primary"}
            >제가 만든 베이직 버튼이예요😎</BasicButton>
        </div>
    );
};

export default BasicContainer;