import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import reducer, { initialState } from "./helper/reducer";
import { StateProvider } from "./helper/StateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider reducer={reducer} initialState={initialState}>
        <App />
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
