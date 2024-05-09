import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main/MainPage";
import Mind from "../pages/mind/Mind";
import Layout from "../pages/layout/Layout";
import Intro from "../pages/intro/Intro";
import PageNotFound from "../pages/error/PageNotFound";

const router = createBrowserRouter([
    //다양한 값들 전달하기 위한 객체
    {
        path : '/',
        // element : <MainPage/>
        // layout이 먼저 작업되고 children으로 컴포넌트 받기
        element : <Layout/>,
        // 여러 개의 값을 넣기 가능
        children : [
            {
                // path : '/main', 
                path : '/', //처음 보일 때부터 main 보여주기 , / 가 겹쳐도 오류가 나지 않는다.
                element: <MainPage/>
            },
            {
                path : '/mind', 
                element: <Mind/>
            }
        ]
    },
    {
        path : '/intro',
        element : <Intro/>,
    }, 
    {
        path : '*', 
        element : <PageNotFound/>,
    }
    // {
    //     path : '/mind', 
    //     element: <Mind/>
    // }
])

export default router;