import React from 'react';
import { Outlet } from 'react-router-dom';

// Outlet의 역할
// 라우팅에서 children으로 들어오는 컴포넌트를 모두 화면에 뿌려주는 컴포넌트
// Outlet은 변수({Outlet})가 아닌 컴포넌트 형태로 사용해야 한다.

const Layout = () => {
    return (
        <>
            <header>여기는 header 부분 🐱</header>
            <main>
                <Outlet/>
            </main>
            <footer>여기는 footer 부분 🐶</footer>
        </>
    );
};

export default Layout;