import React, { Component } from 'react';

// 색을 넘기고는 있는데 받고는 있지 못한다 , 알아서? -> 이 때 Component 
// 컨테이너를 먼저 만들고 컨테이너 만듦 , 부모가 자식에게 물려주고 있는 상태 , 상속의 관계
// 부모가 먼저 호출되고 그 다음 자식
// 부모가 먼저 #000 했지만 자식이 null로 덮어 씌워서 안됨.--> lifecycle로 해결
class LifeCycleComponent extends Component {
    // state 값 받기
    state = {
        number : 0,
        color : null,
    }

    onClickToIncrease = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    /*
        부모에서도 color를 보내고 자식도 color를 가지고 있기 때문에 
        언제 색이 바뀌는지 확인하고 싶다.
    */

    constructor(props){
        //부모 호풀 메소드
        super(props)
        console.log(props);
    }

    /*
    props는 부모의 값
    state는 자식의 값
    부모의 값을 자식한테 넘겨주는 getDerived...
    */

    // 마운트 단계
    // static 을 쓰는 이유 : 컴포넌트를 만날 때 부모->자식 순으로 만나는데 getDerived는 자식안에 선언되어 있어서 자식이 부모의 값을 전달받지 못한다.
    // 그래서 컴파일러가 먼저 사용할 수 있게끔 static선언
    static getDerivedStateFromProps(nextProps, prevState){
        // nextProps에 자식? 부모? 
        console.log("getDerivedStateFromProps", nextProps, prevState)
        if(nextProps.color!==prevState.color){
            return {color:nextProps.color}
        }
        return null;
    }

    // render 되었고, (null -> black)

    // componentDidMount()실행
    componentDidMount(){
        console.log("componentDidMount 실행완료")
    }

    // 업데이트
    // 다음 state값을 받아서 업데이트할지 말지 결정하는 것이기 때문에 nextState
    // 조건이 되었을 때 리랜더링 해주는 함수
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate : ", nextProps, nextState)
        // 0 / 5의 몫은 0이므로 더하기 버튼을 눌러야 색상 변경
        return nextState.number % 5 !== 0
    }

    // reference 사용(함수형은 아니지만)
    colorRef = null;

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate", prevProps, prevState)
        if(prevProps.color !== this.props.color){
            return this.colorRef.style.backgroundColor;
        }
        return null;
    }

    // snapshot을 사용하는 애
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevState){
            console.log(`업데이트 직전 State : ${prevState}`)
        }
        if(prevProps){
            console.log(`업데이트 직전 props : ${prevProps}`)
        }
        console.log("snapshot", snapshot);
    }

    // 새 레이아웃 만들기
    render() {
        return (
            <div>
                <div
                    ref={(el)=>this.colorRef = el}
                    // 객체로 넣기
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor : this.state.color, //위에서 만든 color값 사용
                        display: "flex",
                        justifyContent : "center",
                        alignItems : "center",
                        color : "#fff"
                    }}
                >
                    {/* 클래스 LifeCycleComponenet 안에서의 number 0값 */}
                    {/* 부모 컴포넌트 */}
                    <h1>{this.state.number}</h1>
                </div>

                    {/* 자식 요소 */}
                <button onClick={this.onClickToIncrease}>더하기 버튼</button>
            </div>
        );
    }
}

export default LifeCycleComponent;