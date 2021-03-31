import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { App } from './app/index';
import {store} from "./app/init/store";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('main'));
reportWebVitals();
