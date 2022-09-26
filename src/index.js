import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import reducer, { initialState } from './helper/reducers/reducer';
import { StateProvider } from './helper/StateProvider/StateProvider';
import ThemeProvider from './helper/ThemeProvider/ThemeProvider';
import { GlobalStyles } from './styles/global.styled';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ModeHandler from '../src/utils/mode';

const root = ReactDOM.createRoot(document.getElementById('root'));
const { mode, switchMode } = ModeHandler();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider reducer={reducer} initialState={initialState}>
        <HelmetProvider>
          <ThemeProvider>
            <GlobalStyles />
            <Helmet>
              <body theme-data={mode} />
            </Helmet>
            <Header />
            <Sidebar />
            <App />
          </ThemeProvider>
        </HelmetProvider>
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
