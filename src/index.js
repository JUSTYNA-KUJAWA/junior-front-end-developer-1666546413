import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import "./styles/normalize.scss";
import "./styles/global.scss";
import "font-awesome/css/font-awesome.min.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
