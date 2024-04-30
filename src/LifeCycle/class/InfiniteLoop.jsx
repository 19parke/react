import React, { Component } from 'react';

class InfiniteLoop extends Component {

    // state값 만들기
    state = {
        // user를 배열로 받기
        users : [],
    }
    //state값에 있는 것을 알려줘야 하는데 users

    componentDidMount = () => {

        /*
            원래는 해당 코드가 render 밑으로 들어가 있다.
            비동기 함수는 무한반복으로 리랜더링 된다.
            그래서 그 해결책을 마운트 됐을 때 딱 한 번만 실행해주는 코드로 componentDidMount안에 사용
            그래서 lifecycle을 알아야 한다.
        */


        const getDates = async () => {
            // json형태로 data가 모일 것이다.
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            // json을 파싱하는 작업
            const datas = await response.json();
            console.log('리랜더링')
            return datas
        }

        // 비동기 함수이니까 datas를 then으로 받기,
        // user정보 통으로 들어오니까 
        getDates().then((datas)=>{this.setState({users:datas})})
    }

    // 마운트 단계, 컴포넌트 안에서 사용한 다는 것은 랜더링을 시키겠다는 것
    // [ react 의 기본 구조]
    /*
    버츄얼 돔 에서 먼저 랜더링 그리고 나서 불필요한 부분을 감지하고 나서 화면에 뿌려준다.
    */
    render() {
        // 밑의 users를 사용하기 위해 state값을 알려준다, 비구조할당 state는 객체 users는 배열
        const { users } = this.state

        // const getDates = async () => {
        //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //     const datas = await response.json();
        //     console.log('리랜더링')
        //     return datas
        // }

        return (
            <div>
                {/* users를 이용해서 출력
                Enter를 칠 것이기 때문에 소괄호 사용 */}
                {users.map((user, i) => (
                    <p key={i}>{user.name}</p>
                ))}
            </div>
        );
    }
}

export default InfiniteLoop;