import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";

const Container = () => {
    // const name = "박은혜";
    // const age = 20;
    // const style = {
    //     color: "red",
    // };

    // 컴포넌트3을 만든 후 자식 컴포넌트에게 이름, 나이, 전화번호, 주소를 전달 후 화면에 출력
    const users =  {
        name:'박은혜', 
        age:24, 
        number: "01063657218", 
        address : "경기도 안양시 동안구"
    }
    return (
        <>
            {/* <Component1 name={name} age={age} /> */}
            {/* <Component2 style={style} /> */}
            <Component3 users={users} />
        </>
    );
};

export default Container;
