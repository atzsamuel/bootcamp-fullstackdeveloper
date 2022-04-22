import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Saludo from "./components/Saludo";
const edad = 21;

ReactDOM.render(
  <React.StrictMode>
    <Saludo />
  </React.StrictMode>,
  document.getElementById("root")
);
