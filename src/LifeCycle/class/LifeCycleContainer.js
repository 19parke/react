// 자식이 어떻게 부모의 props와 state를 받는지
// 언제 자식 부모에 변화가 생기는지
import React, { Component } from 'react';
import LifeCycleComponent from './LifeCycleComponent';

// 랜덤 컬러를 16진수로 표현해주는 함수
const getRandomColor = () => {
    // 16진수로 표현해주는 # 
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
}

// Container가 Component를 감싸고 있기 때문에 부모 자식 관계가 된다. 
class LifeCycleContainer extends Component {

    // 부모의 초기 컬러값
    state = {
        color: "#000000"
    }

    // 값이 언제 변화하는지 보기 위해서 State값 변경 함수를 작성
    onClickToChangeColor = () => {
        // 함수형 컴포넌트 아닌 Class형 컴포넌트로 하기 때문에 useState개념이 없다. 그래서 this 이용
        this.setState({
            // 객체로 받기
            color: getRandomColor()
        })
        // this라는 값을 무조건 class를 찾아가게 되어 있음 (LifeCycleContainer, 클래스는 하나의 객체, 반)
        // 클래스는 관련되어 있는 것들을 모아서 추상화
        // 클래스를 사용할 때 객체화 한다. 자동차를 구체적으로 만들어 놓은것, 구체화 :
        // ex) 은혜차 rangerover 억대 파란색 각 속성들이 정해져있다.
        // 클래스는 속성들이 있지만 정확한 값이 뭔지 모른다.

        // 객체화 하기 전에 클래스를 호출한다. this = class 
        console.log(this.state.color)
    }

    render() {
        return (
            <div>
                {/* this = class, . 메소드 호출 (객체니까) */}
                <button onClick={this.onClickToChangeColor}>색상 변경</button>
                {/* props넘겨주기 */}
                <LifeCycleComponent color={this.state.color}/>
            </div>
        );
    }
}

export default LifeCycleContainer;