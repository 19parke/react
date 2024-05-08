import React from 'react';
import { Link } from 'react-router-dom';

// Main Container
const Main = () => {
    return (
        <div>
            Route 여기는 메인페이지😊
            {/* <a href="intro">소개페이지로 이동</a> ==> 깜빡거린다 */}
            <Link to="/intro">소개페이지로 이동</Link>
        </div>
    );
};

export default Main;