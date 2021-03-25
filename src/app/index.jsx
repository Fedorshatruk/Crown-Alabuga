import { Routes } from './routes';
// Global styles
import { GlobalStyle } from './styles/global'

// instruments
import { store } from './init/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

export const App = (props) => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};
