import React from 'react';
import C from './C';
import CharContext from '../CharContext';

const B = () => {
    return (
        <div>
            <CharContext.Consumer>
                {
                    //가져오고                          사용
                    (context) => <p style={{fontSize : context.fontSize }}>B에서 제공받고 있는 Consumer</p>
                }
            </CharContext.Consumer>
            <C />
        </div>
    );
};

export default B;