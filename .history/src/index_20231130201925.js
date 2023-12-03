import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./reux-thunk/store";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ScrollToTop/>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
