import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';
import 'react-toastify/dist/ReactToastify.css';

import { persistor, store } from './store';


import { theme } from './theme';
import GlobalStyle from './theme/global';

import Routes from './routes';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer />
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
