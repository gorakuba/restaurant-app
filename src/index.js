import React from "react";
import ReactDOM from "react-dom/client";

//App
import App from "./App";

//reportWebVitals
import reportWebVitals from "./reportWebVitals";

//BrowserRouter
import { BrowserRouter } from "react-router-dom";

//reducer
import reducer, { initialState } from "./helper/StateProvider/reducer";

//StateProvider
import { StateProvider } from "./helper/StateProvider/StateProvider";

//Theme
import Theme from "./helper/ThemeProvider/Theme";

//GlobalStyle
import { GlobalStyles } from "./styles/global.styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider reducer={reducer} initialState={initialState}>
        <Theme>
          <GlobalStyles />
          <App />
        </Theme>
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
