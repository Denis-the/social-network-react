import './index.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primeflex/primeflex.css';

import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';
import {Provider} from 'react-redux';

const renderEntireTree = (store) => {
    ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                    <App store={store}/>
                </Provider>
            </BrowserRouter>,
        document.getElementById('root')
    );
}

// если не используюется библиотека react-redux, обновлять рендер придется самому
// store.subscribe(() => {
//     renderEntireTree(store)
// });

renderEntireTree(store);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
