import React from 'react';
// 매개변수로 들어온 객체로 바로 비구조화 할당 가능
const Component3 = ({users}) => {

    // 매번 반복되는 코드 번거롭기 때문에, 비구조화 할당
    // const {users} = props;
    const {name, age, address, number} = users;

    return (
        // props자체가 객체이고 users도 객체이니 객체 안의 객체 사용 주의
        <ul>
            <li>저의 이름은 <strong>{name}</strong>입니다. </li>
            <li>저의 나이는 <strong>{age}</strong>입니다. </li>
            <li>저의 번호는 <strong>{number}</strong>입니다. </li>
            <li>저의 이름은 <strong>{address}</strong>입니다. </li>
        </ul>
    );
};

export default Component3;