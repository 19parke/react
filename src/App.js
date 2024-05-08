import { ThemeProvider } from "styled-components";
import "./App.css";
import theme from "./style/theme";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Intro from "./pages/intro/Intro";
import Job from "./pages/job/Job";
// import AnimalsContainer from "./context/expert/AnimalsContainer";
// import CountContainer from "./pages/count/CountContainer";
// import FontContainer from "./pages/font/FontContainer";
// import InfiniteLoop from "./LifeCycle/class/InfiniteLoop";
// import SideEffect from "./LifeCycle/function/SideEffect";
// import SideEffectMount from "./LifeCycle/function/SideEffectMount";
// import Amount from "./LifeCycle/memoization/Amount";
// import ProductContainer from "./LifeCycle/memoization/ProductContainer";
// import StyledComponent01 from "./style/basic/StyledComponent01";
// import GlobalStyle from "./style/global";
// import BasicContainer from "./style/basic/BasicContainer";
// import FontAwesome from "./style/fontAwesome/FontAwesome";
// import CharContainer from "./context/basic/CharContainer";
// import ParentContainer from "./context/normal/ParentContainer";
// import LifeCycleContainer from "./LifeCycle/class/LifeCycleContainer";
// import FoodContainer from "./ref/expert/FoodContainer";
// import FoodContainerAnswer from "./ref/expert/FoodContainerAnswer";
// import PracticeInput from "./ref/basic/PracticeInput";
// import Check from "./ref/basic/Check";
// import Checkbox from "./ref/basic/Checkbox";
// import Name from "./ref/basic/Name";
// import Color from "./state/basic/Color";
// import Name from "./state/basic/Name";
// import FoodContainer from "./map/FoodContainer";
// import UserContainer from "./map/expert/UserContainer";
// import Sound from "./state/basic/Sound";
// import Count from "./state/basic/Count";
// import Jsx01 from "./Jsx01";
// import logo from "./logo.svg";
// import Jsx02 from "./Jsx02";
// import Jsx03 from "./Jsx03";
// import Jsx04 from "./Jsx04";
// import Jsx05 from "./Jsx05";
// import Container from "./props/Container";

function App() {
    // 돔트리가 하나 이상이면 오류, 돔트리는 무조건 한 개
    // return <Jsx01 />;
    // return <Jsx02 />;
    // return <Jsx03></Jsx03>;
    // return <Jsx04 />;
    // return <Jsx05 />;
    // return <Container />;
    return (
        // <FoodContainer/>
        // <UserContainer/>
        // <Count />
        // <Sound/>
        // <Name/>
        // <Color/>
        // <Name/>
        // <Check/>
        // <Checkbox/>
        // <PracticeInput/>
        // <FoodContainer/>
        // <FoodContainerAnswer/>
        // <LifeCycleContainer/>
        // <InfiniteLoop/>
        // <SideEffect/>
        // <SideEffectMount/>
        // <ProductContainer/>\
        // 내가 사용하고 있는 모든 어플리케이션 / 컴포넌트에게 값을 전달해주기 위해 provider, 테마를 제공해주는
        // 그 밑 자식 컴포넌트들이 제공 받는다. 내가 만든 테마를 꼭 import 해줘야 한다.
        // <ThemeProvider theme={theme}>
        // 원래는 f1 눌러서 emmet으로 되어야 한다.
        //<div class="">
            //<StyledComponent01/>
            //<GlobalStyle/>
            //<BasicContainer/>
            //<FontAwesome/>
        //</div>
        ///ThemeProvider>
        // <>안녕 리액트</>
        // <CharContainer/>
        // <ParentContainer/>
        // <AnimalsContainer/>
        // <CountContainer/>
        // <FontContainer/>
        <>
            <Routes>
                {/*  / 는 메인페이지(home) , / 여기 들어오면 element 보여줘*/}
                <Route path='/' element={<Main />}/>
                <Route path='/intro' element={<Intro />}/>
                <Route path='/job' element={<Job/>}>
                    <Route path=':title' element={<Job/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
