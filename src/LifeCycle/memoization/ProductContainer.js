import React, { useCallback, useMemo, useState } from 'react';
import Amount from './Amount';

// 부모 컴포넌트
const ProductContainer = () => {
    // 스타일 넣기

    // container는 화면쪽 보일 때 어느 정도 위치를 잡기 위해
    const containerStyle = {
        width : "500px",
        height : "300px",
        // auto 로 중앙으로 띄우기
        margin : "20 auto"
    }

    // 영역을 보기 위해
    const productStyle = {
        border : "1px solid lightgray",
        padding : "30px",
        lineHeight : "1.3"
    }

    const divStyle = {
        border : "1px solid blue",
        height : "60px",
        display : "flex",
        // flex의 속성사용하기 
        justifyContent : "space-evenly",
        // 교차축, 위아래 공간을 센터로 띄운다
        alignItems : "center",
        padding : "20px",
        marginTop : "20px"
    }

    const pStyle = {
        // 중앙으로 만들기 위해
        lineHeight : "0"
    }

    const buttonStyle = {
        width: "40px",
        height: "40px"
    }

    // 랜더링과 프롭스
    console.log('부모(Container) 랜더링👨‍🦳')
    const [like, setLike] = useState(0);

    // props로 자식에게 값을 넘겨주기 위해
    const [amount, setAmount] = useState(1);
    const [coupon, setCoupon] = useState(0);
    
    // [버전 A] 객체에 담아서 props 넘기기 (Side Effect있는 버전)
    // props로 받아서 객체로 넘기기 위해
    // const prop = {amount : amount, coupon: coupon}

    // useMemo(()=>{}, []) 의존성 배열 : 앞의 콜백함수가 뒤의 배열에 의존하고 있기 때문에
    // 배열의 값이나 상태가 변할 때 , 혹은 없을 때 콜백함수가 영향을 받음
    
    // [버전 B] props를 useMemo로 관리
    // 캐시에 올라가 있는 상태 , []의존성 배열이 아무것도 없는 상태 : 마운트 할 때 딱 한 번
    // 이렇게 하면 부모자식 리랜더링은 되지만 값이 변화하지 않는다. 빈배열을 넣기 때문에 
    // 캐시에 값들을 두 개 올려 놓고 그 값을 변화시키지 않았다. 빈배열 - 처음에 딱 한번만 실행하라는 메소드이기 때문에 
    // 메모리에 올라간 상태로 그대로 있는 것 , 값을 바꾸지 못함
    // const props = useMemo(()=>return {amount: amount, coupon: coupon}. [])

    // [버전 C] 값이 갑자기 변화해 있음 : memoization에 올라갔는데 랜더링 됐을 때 막은 것 
    // const props = useMemo(()=> {
    //     console.log('값이 변화됨')
    // amount나 coupon이 변화했을 때 amount coupon둘 다 리랜더링 됨-> Side Effect 그대로 남아있음
    //     return {amount: amount, coupon: coupon}}, [amount, coupon]
    //     )

    // [버전 D] 그래서 각각 하나씩 분리해야되는 작업이 필요
    const amountMemo = useMemo(()=>{
        console.log('amount 연산')
        return amount
    }, [amount])

    const couponMemo = useMemo(()=>{
        console.log('coupon 연산')
        return coupon
    }, [coupon])

    //  자식 컴포넌트로 보내기 위해
    const props = { amount:amountMemo, coupon:couponMemo }

    // 좋아요 증가 버튼
    const onClickToLike = () => {
        setLike(like + 1)
    }

    // amount와 coupon 감소 증가 수량 버튼에 해당 되는 함수들 만들기 (버튼 총 4개)
    
    /*
    변화를 주는 기능들을 useCallback으로 감싸서 property로 보내버리기
    처음 모습은 이랬다. 
    const onClickToAddAmount = () => {
        setAmount(amount+1)
    }
    
    + - 는 변화를 주는 기능들이고 자식컴포넌트로 보낸 것들 => useCallback 사용하기 

    useCallback(콜백함수, 의존성배열)
    useCallback(()=>{}, [])
    부모 -> 자식 프롭스 함수를 보낼 때 useCallback()을 감싸서 보내라

    */

    const onClickToAddAmount = useCallback(() => {
        setAmount(amount + 1)
        // amount가 변했을 때만 useCallback으로 감싸기
    }, [amount])
    
    const onClickToSubtractAmount = useCallback(() => {
        setAmount(amount - 1)
    }, [amount])

    // useCallback 기능 확인하기 - 의존성 배열 안의 amount 지우고 coupon 넣어보기 
    // ==> coupon이 변해야 기능 실행 
    // ** 처음 마운트 되었을 때는 새로 생성 되어있다. (setAmount(amount+-1)을 가지고 있음)
    // 그러나 수량 + 눌렀을 때는 되나 2번째 눌렀을 때는 변화가 없다.
    // 의존성 배열 값의 변화가 있을 때 콜백 함수를 새로 생성하고, 그렇지 않을 경우 콜백함수를 생성하지 않는다. => 성능의 향상 (없을 때는 함수가 없으니)
    // 그래서 무슨 현상이 발생하냐면 
    // 쿠폰 + 버튼을 눌러주면 callback함수가 생성되니 그 뒤에 수량 + 를 누르면 값이 바뀐다. 
    // 그러나 연속으로 두 번째 수량 +를 누르면 값이 또 변하지 않는다. 
    // 이렇듯 쿠폰을 의존성 배열에 넣어 주었으니 coupon의 값이 변하면  callback함수가 생성되어 amount의 수량을 변화시킬 수 있다. 
    
    const onClickToAddCoupon = useCallback(() => {
        setCoupon(coupon + 1)
        // coupon이 변했을 때만 useCallback으로 감싸기
    }, [coupon])

    const onClickToSubtractCoupon = useCallback(() => {
        setCoupon(coupon - 1)
    }, [coupon])


    return (
        <div style={containerStyle}>
            <div style={productStyle}>
                <p>[책] 배워서 바로 써먹는 리엑트</p>
                {/*  화면 쪽에 뿌리는 것이 없어서 {like} */}

                {/* 좋아요 버튼을 누르면 : 부모 & 자식 랜더링이 되는데(콘솔)
                부모 컴포넌트를 누른건데 자식로 리랜더링 된 것을 확인 할 수 이다. 
                - 이것은 리액트의 구동원리로 당연한 것이다. 부모가 자식 컴포넌트를 갖고 있기 때문에 자식이 랜더링 되는 것 당연한 것
                */}
                <button onClick={onClickToLike}>좋아요 {like}</button>
                {/* 자식 컴포넌트 호출 - 버튼 두개를 가지고 있어서 클릭했을 때의 결과값을 넘겨주기 위해 */}
                <Amount 
                    props={props}
                    divStyle={divStyle}
                    pStyle={pStyle}
                    buttonStyle={buttonStyle}
                    onClickToAddAmount={onClickToAddAmount}
                    onClickToSubtractAmount = {onClickToSubtractAmount}
                    onClickToAddCoupon = {onClickToAddCoupon}
                    onClickToSubtractCoupon = {onClickToSubtractCoupon}
                />
            </div>
        </div>
    );
};

export default ProductContainer;