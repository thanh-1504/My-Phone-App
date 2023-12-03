import ScrollToTop from "./components/ScrollToTop";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { store } from "./reux-thunk/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ScrollToTop />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
