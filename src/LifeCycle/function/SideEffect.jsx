import React, { useEffect, useState } from 'react';

const SideEffect = () => {
    const [color, setColor] = useState("black")
    const [name, setName] = useState("");

    const onClickToChangeColor = () => {
        setColor("red")
    }

    const onClickToChangeName = () => {
        setName("박은혜")
    }

    // 리랜더링이 될때마다 실행, 변화가 생길때 마다 콘솔에 찍힘, 사이드이팩트 현상
    // useEffect(()=>{
    //     console.log("랜더링 될 때마다 확인하는 콘솔")
    // })

    // 마운트가 됐을 때 딱 한 번 => 사이드이팩트를 잡은 코드
    // useEffect(()=>{
    //     console.log("랜더링 될 때마다 확인하는 콘솔")
    // }, [])

    // 해당 상태가 변경 됐을 때 리랜더링
    // componentDidMount의 기능
    useEffect(()=>{
        console.log("색상이 변경 됐을 때 실행하는 콘솔")
    }, [color])

    return (
        <div>
            <h1 style={{color}}>안녕하세요! {name}님</h1>
            {/* 우리가 모르는 사이에 사이드이팩트, 색상변경 누르면 색상변경만 변경되어야 하는데 불필요하게 이름변경 버튼까지도 다시 그려준다. */}
            <button onClick={onClickToChangeColor}>색상 변경</button>
            <button onClick={onClickToChangeName}>이름 변경</button>
        </div>
    );
};

export default SideEffect;