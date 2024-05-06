import React from 'react';
import ChildContainer from './ChildContainer';
import { FontSizeContext, FontSizeProvider } from '../FontSizeContext';

// 우리가 만들어 놓았던 Context를 제공해야 사용가능
const ParentContainer = () => {
    return (
        <div>
            {/* context 제공 */}
            {/* 기존 방법 : FontSizeContext.Provider value={} */}
            <FontSizeProvider>
                {/* 자식요소 */}
                <ChildContainer />
            </FontSizeProvider>
        </div>
    );
};

export default ParentContainer;