import React from 'react';
import CharContext from '../CharContext';

const C = () => {
    return (
        <div>
            {/* 마지막 자식요소 */}
            {/* Context를 사용하는 사람이므로 Consumer, Consumer는 특정 문법이 있다. 제공받기 위한 로직 필요 */}
            <CharContext.Consumer>
                {/* React는 연산이 필요할 때 중괄호 {} 사용 -> context접근, context에 접근하기 위한 값을 들어올 것이므로 callback함수로 받음
                context값이 들어옴 */}
                {(context) => 
                    // value를 사용하기 위해
                    <p style={{fontSize: context.fontSize }}> 리액트 Context 환영해!🤔</p>
                }
            </CharContext.Consumer>
        </div>
    );
};

export default C;