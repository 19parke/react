import React from 'react';
import Food from './Food';

const FoodContainer = () => {

    const style = {
        listStyle : "none"
    }

    const foods = [
        {
            id : 1, 
            name: '샐러드'
        },
        {
            id : 2, 
            name: '퀘사디아'
        },
        {
            id : 3, 
            name: '피자'
        },
        {
            id : 4, 
            name: '햄버거'
        }
    ]

    // li태그를 Food컴포넌트로 변경하기
    // const foodList = foods.map((food, i, foods)=><li key={i} style={style}>{food.name}, {food.id}</li>)

    // 반복문을 돌면서 반복문 안에 있는 각각의 값들이 컴포넌트 각각의 값을 사용할 수 있도록 넘겨주어야 하기 때문에 
    // food가 food로 전달해주어야 각 음식들 사용가능
    const foodList = foods.map((food, i, foods) => <Food key={i} style={style} food={food}/>)
    
    // console.log(foodList)
    return (
        <div>
            {foodList}
        </div>
    );
};

export default FoodContainer;