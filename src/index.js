// import reportWebVitals from './reportWebVitals';import React from 'react';
import ReactDOM from 'react-dom';
// instruments
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import { store }  from './bus/redux-store';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('main')
);

// reportWebVitals();
