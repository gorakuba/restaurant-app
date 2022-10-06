import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MyApp from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Provider } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { store } from './api/store';
import { GlobalStyle } from './styles/GlobalStyle';
import ModeHandler from './utils/mode';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

const container = document.getElementById('root');
const root = createRoot(container!);

const App = () => {
  const { mode, switchMode } = ModeHandler();

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <HelmetProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Helmet>
                <body theme-data={mode} />
              </Helmet>
              <Header switchMode={switchMode} />
              <Sidebar />
              <MyApp />
            </ThemeProvider>
          </HelmetProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};
root.render(<App />);
