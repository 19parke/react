import React from 'react';

const Jsx04 = () => {
    const name = undefined || '기본값'
    const login = true;
    const guest = true;

    return (
        <div>
            {name}
            {/* return 되는 컴포넌트 안에서는 사용할 수 없으나 밖에서는 가능 */}
            {/* {if()} if문을 사용할 수 없다.*/}

            {login && guest && (
                <div>
                    <h1>비회원으로 로그인이 되었습니다.😎</h1>
                </div>
            )}

            {/* // React는 삼항 연산자를 지원한다.  */}
            {login ? (
                <h1>{name}님 환영합니다.</h1>
            ) : (
                <h2>로그인 실패</h2>
            )}


        </div>
    );
};

export default Jsx04;