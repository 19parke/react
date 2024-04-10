// 모듈 형태로 가져오는 것
import React from 'react'

const Jsx01 = () => {
    // return 으로 보여줄 화면 내용을 돌려준다. 꼭 있어야 한다.
    return (
        <>안녕 리액트🤦‍♀️</>
    )
}
// 모듈을 App에 내보내는 형식, 외부에서도 사용할 수 있게끔
//작성해주지 않으면 App.js에서 읽지 못한다.
export default Jsx01;