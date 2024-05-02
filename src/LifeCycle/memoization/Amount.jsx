import React from 'react';

// 자식 컴포넌트
// Amount라는 컴포넌트 생성하기
const Amount = ({
    // 부모에서 값 받기
        props,
        divStyle,
        pStyle,
        buttonStyle,
        onClickToAddAmount,
        onClickToSubtractAmount,
        onClickToAddCoupon,
        onClickToSubtractCoupon
    }) => {
    // 자식 컴포넌트가 랜더링 될 때 확인하기 위해 
    console.log('자식(Amount) 랜더링👶')
    // 비구조화 할당, 부모에서 보낸 amount, coupon받기
    const {amount, coupon} = props;        

    return (
        <div style={divStyle}>
            {/* + / - 하며 값을 변경 , 그런데 컨테이너에서 값을 넘겨줌 */}
            {/* 받아서 화면에 뿌릴 내용, 받은 coupon,amount 화면에 뿌리고 만든 함수들 연결시켜주기 */}
            <button style={buttonStyle} onClick={onClickToSubtractAmount}>-</button>
            <p style={pStyle}>수량: {amount}</p>
            <button style={buttonStyle} onClick={onClickToAddAmount}>+</button>

            {/* 수량이나 쿠폰 하나만 눌러도 자식 전체가 리랜더링 되고 있음
            LifeCycle을 배웠기 때문에 쿠폰 증가를 눌렀을 때 수량은 리랜더링이 안되도 되는데도 불구하고 
            자식 컴포넌트 전체가 리랜더링 되고 있다. ==>  SideEffect 발생
            
            => 변수들을 우리가 원하는 대로 값을 줄여서 필요한 부분만 랜더링 시킬 수는 없을까? == useMemo
            useMemo : 변수의 값을 미리 캐쉬에다가 올려놓고 래린더링 되더라도 캐시 값이 저장 되어 있기 때문에 
            그대로 가져다가 사용하기 */}

            <button style={buttonStyle} onClick={onClickToSubtractCoupon}>-</button>
            <p style={pStyle}>쿠폰: {coupon}</p>
            <button style={buttonStyle} onClick={onClickToAddCoupon}>+</button>
        </div>
    );
};

export default Amount;