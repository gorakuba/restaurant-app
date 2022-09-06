import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import reducer, { initialState } from './helper/StateProvider/reducer';
import { StateProvider } from './helper/StateProvider/StateProvider';
import Theme from './helper/ThemeProvider/Theme';
import { GlobalStyles } from './styles/global.styled';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider reducer={reducer} initialState={initialState}>
        <Theme>
          <GlobalStyles />
          <Header />
          <Sidebar />
          <App />
        </Theme>
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
