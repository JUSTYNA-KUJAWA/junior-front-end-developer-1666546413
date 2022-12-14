import { createRoot } from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import store from "../src/Redux/store";
import App from "./App";
import "./styles/global.scss";
import "font-awesome/css/font-awesome.min.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
