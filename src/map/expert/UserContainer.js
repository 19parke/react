import React from 'react';
import User from './User';
import Users from './Users';
// useAsync 노란색 줄 : react-async안에서 여러 모듈이 있는데 default인 값만 나온다.
// Component를 내보냈을 때 export default FoodContainer , default라는 값이 이 파일을 대표하는 친구
// 그래서 해당 파일을 불렀을 때 default값이 FoodContainer니까 대표하는 친구 딱 한 명! 
// 한 명이기 때문에 사용할 때 그냥 불러올 수 있는 것
// 그런데 async같은 경우는 모듈이기 때문에 모듈에서는 여러개 내보낼 수 있음
// 모듈에서는 여러가지가 감싸져 있기 때문에 객체로 필요한 것만 비구조화 할당해서 가져와야됨
// import { useAsync } from 'react-async'

    // 2. 그래서 외부에서 선언, 그런데 최신 버전 업데이트 돼서 가능해짐
    // const getUsers = async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const users = await response.json()
    //     return users;
    // }
    // 여러 가지 data값으로 지원, 모듈을 사용했을 때 가져온 data들을 어떤 상태에서 어떻게 보여줄래?를 제어할 수 있음
    // console.log(useAsync({promiseFn : getUsers}))

    // const {value, isResolved } = useAsync({promiseFn : getUsers})
    // console.log(value)
    // const userList = getUsers().then((uesrs)=> console.log((user)=> <div>{user.name}</div>))

const UserContainer = () => {

    // 1. 안에서 비동기 함수 사용시 무한 로딩

    const users = [
        {
            id : 1,
            name : '박은혜',
            email: 'grace1@gmail.com'
        },
        {
            id : 2,
            name : '신짱구',
            email: 'zzangoo@gmail.com'
        },
        {
            id : 3,
            name : '홍길동',
            email: 'hong@gmail.com'
        },
        {
            id : 4,
            name : '장보고',
            email: 'jang@gmail.com'
        }
    ]


    // 1) 컨테이너로만 했을 때 
    // {} 중괄호를 사용하면 undefined로 나온다. 왜?
    // const userList = users.map((user, i, users)=><li key={i}>{user.id} - {user.name} : {user.email}</li>)
    
    // 2) User로 분리했을 때 
    // const userList = users.map((user, i)=><User key={i} user={user}/>)
    const userList = <Users users={users}/>;

    return (
        // 화면쪽에 컨테이너로만 유저의 이름과 이메일 출력하기
        // 컴포넌트로 분리 난이도1 User로 분리하기
        // 난이도3 Users-User로 분리하기
        <div>
            {/* {}중괄호를 하면 값, 중괄호를 빼면 적은 내용 userList 출력 */}
            {userList}
        </div>
    );
};

export default UserContainer;