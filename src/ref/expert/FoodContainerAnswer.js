import React, { useRef, useState } from 'react';

const FoodContainerAnswer = () => {

    const style = { listStyle : "none"};

    // inputRef
    const inputRef = useRef([])

    // food 상태
    const [foods, setFoods] = useState([]);

    // 체크 상태, checked의 상태를 관리하기 위해
    const [checked, setChecked] = useState([]);

    // foodList만들기
    // foods를 반복 돌려야 함
    // 비구조화 할당 kor, eng
    // return 값이 있어야 함, 함수로 돌려주는 것보다
    // return 은 값을 반환, 함수 종료, 함수의 기능을 모두 했다는 뜻
    // !!사용한 곳!!으로 값을 반환
    // foodList에서 화면에 뿌려주기 위해, 사용한 곳에 그 태그를 , 값을 보여주기 위해
    // react에서 return 쓸 대 ; 자동 추가 , 그래서 길어져서 단락을 구분하고 싶을 때 소괄호로 묶어주기 
    const foodList = foods.map(({kor, eng}, i)=> {
        return (
            // key의 i 와 체크박스 배열의 인덱스 값이 같이느
            <li key={i} style={style}>
                <input 
                    type="checkbox" 
                    // checked 상태를 관리하기 위해서 즉 Check의 index와 foods의 list를 비교해서 검사하기 위해서 
                    // 상태를 관리한다. 
                    // 상태를 똑같이 맞춘 것
                    checked = {checked[i]}

                    // checked 안에 상태를 바꾸기 위해서 사용하는 함수
                    // 상태를 단순히 변화시킨 것
                    onChange={()=>{ onChangeCheckBox(i) }
                }/>
                {`${kor} (${eng})`}
            </li>
        );
    })

    // food추가버튼
    const onClickToAdd = () => {
        // console.log('추가 버튼')
        // setfoods 값을 추가한 것
        setFoods(
            // put대신에  conscat
            // 하나의 배열 방에 한글+영어가 들어가야 하니 객체를 사용해야 한다!
            foods.concat({
                kor : inputRef.current[0].value,
                eng : inputRef.current[1].value
            })
        )
        // 추가했을 대 checked의 상태도 같이 false로 넣어 놓는 것
        setChecked(checked.concat(false))
        // console.log(inputRef.current[0].value, inputRef.current[1].value)
    }

    // 체크박스가 변화 됐을 대 확인해서 각각의 값, 우리가 만들어 놓은 배열로 넣기 위해 
    // index의 번호를 이용해서 true , false 비교하며 
    // chekced 상태 관리, 상태를 바꿔주는 
    // checked 상태를 클릭했을 때 변화를 주기 위해서 splice(indes, 몇 개 , '값') == 수정의 역할 (여기에 이 값을 넣어줘)
    const onChangeCheckBox = (i) => {
        checked.splice(i, 1, !checked[i])
        // 다시 새롭게 배열에 넣어주기 위해, 바꾼 값을 적용시켜주기 위해서 리랜더링
        setChecked(checked.conscat())

    }
    // 자르는 메소드
    // 샤샤샤 , split slice splice


    // food 삭제버튼
    const onClickToRemove = () => {
        // 체크 필요
        // 체크 된 것 골라내는 법
        // 클릭한 것을 없앨 것이기 위해 , 체크한 것을 삭제 해야되기 때문에, checked[i]인 상태로 누르면 클릭한 값이 남으니까 
        // ! not 붙여서 반대 값을 배열 foods에 넣는다
        setFoods( foods.filter((food, i) => !checked[i]))
        
        // Foods의 길이만큼 new Array().fil(false)로 전달하여 다시 만들어 Checked의 배열에 넣는다.
        setChecked( new Array(foods.length).fill(false))
    }

    return (
        <div>
            <input type="text" placeholder='한국 음식 이름' ref={((element)=>{inputRef.current[0] = element})}></input>
            <input type="text" placeholder='영어 음식 이름' ref={((element)=>{inputRef.current[1] = element})}></input>
            <button onClick={onClickToAdd}>추가</button>
            <button onClick={onClickToRemove}>삭제</button>
            <div>
                <ul>
                    {/* 반복돌려서 뿌려주기 위해해 */}
                    {foodList}
                </ul>
            </div>
        </div>
    );
};

export default FoodContainerAnswer;