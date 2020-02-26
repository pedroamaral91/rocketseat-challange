import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </BrowserRouter>
);

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
