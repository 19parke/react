import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Redux를 추가하는 로직
import {legacy_createStore as createStore} from 'redux'
// import count from './redux/modules/count';
import {devToolsEnhancer} from 'redux-devtools-extension'
// App을 감싸주기 위한 Provider 필요, redux에 있음
import {Provider} from 'react-redux'
import font from './redux/modules/font';

// route 모듈 가져오기
import route from './routes/modules/route';

import { BrowserRouter } from 'react-router-dom'
import { RouteProvider } from './context/RouteContext';

// 어떻게 값이 변했는지 확인하기 위해 devTools이용
// const store = createStore(count, devToolsEnhancer())

// store라는 reducer 만들고 있는데 
// craeteStore값이 변하면 옵션 보게 해줘, 
// 그리고 나중에 store넘겨줘
// const store = createStore(font, devToolsEnhancer())

const store = createStore(route, devToolsEnhancer())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      {/* Provider로 감싸고 내가 만든 store 보내주기 */}
      <Provider store={store}>
        <RouteProvider>
          <App />
        </RouteProvider>
      </Provider>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
