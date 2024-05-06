import React from 'react';
import { FontSizeConsumer } from '../FontSizeContext';

// 마지막 컴포넌트
const FontSizeComponent = () => {
    return (
        <div>
            <FontSizeConsumer>
                {(context) => 
                <>
                    <p style={{fontSize : context.state.fontSize}}>안녕하세요. 컨텍스트입니다!😍</p>
                    {/* 동일한 것을 할당했기 때문에(같은 저장값을 사용) 버튼을 누르면 동시에(모든 컴포넌트들이) 커지거나 작아진다. */}
                    <button onClick={()=>{context.action.setFontSize("1rem")}}>작아지는 버튼</button>
                </>}
            </FontSizeConsumer>
        </div>
    );
};

export default FontSizeComponent;