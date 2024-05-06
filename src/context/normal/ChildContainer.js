import React from 'react';
import FontSizeComponent from './FontSizeComponent';
import { FontSizeConsumer, FontSizeContext } from '../FontSizeContext';

const ChildContainer = () => {
    return (
        <div>
            {/* 기존방법 : FontSizeContext.Consumer */}
            <FontSizeConsumer>
                {(context) =>
                // 돔 트리 생성
                    <>
                        {/* context의 초기값 들어감 */}
                        <h6 style={{fontSize : context.state.fontSize }}>안녕하세요. 리액트!😋</h6>
                        {/* 클릭했을 때 작동해야 하므로 callback함수 이용 */}
                        <button onClick={()=>{context.action.setFontSize('10rem')}}>커지는 버튼</button>
                    </>
                }
            </FontSizeConsumer>
            {/* 자식 */}
            <FontSizeComponent />
        </div>
    );
};

export default ChildContainer;