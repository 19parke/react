import React from 'react';
// fontawesome에서 사용할 것 import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// solid를 사용할 것이면 solid import 
import { faUser, faPoo } from '@fortawesome/free-solid-svg-icons'


// https://fontawesome.com/search?s=solid&f=classic&o=r
// fontAwesome 컴포넌트 
const FontAwesome = () => {
    const style = {
        // 글자 색을 바꾸는 속성, 그래서 font인것이다, icon이 아니라 글자로 인식
        color : "red",
        fontSize: "30px"
    }

    const stylePoo = {
        fontSize : "50px"
    }

    return (
        <div>
            {/* icon 전달할 것인데 {} 해당 문법이다 , 사이트에서는 fa-user라고 되어 있다. html문법에서는 맞미나 js 문법이기 때문에 Camel표기법 faUser*/}
            <FontAwesomeIcon icon={faUser} style={style}/>
            <FontAwesomeIcon icon={faPoo} style={stylePoo}/>
        </div>
    );
};

export default FontAwesome;