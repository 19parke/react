import React from 'react';
import ChildContainer from './ChildContainer';
import { FontSizeContext, FontSizeProvider } from '../FontSizeContext';

const ParentContainer = () => {
    return (
        <div>
            {/* context 제공 */}
            <FontSizeProvider>
                <ChildContainer />
            </FontSizeProvider>
        </div>
    );
};

export default ParentContainer;