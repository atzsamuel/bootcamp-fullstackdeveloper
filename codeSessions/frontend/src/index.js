import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Saludo from "./components/Saludo";
import FormularioFormik from "./components/FormularioFormik";
const edad = 21;

ReactDOM.render(
  <React.StrictMode>
    <Saludo />
    <FormularioFormik/>
  </React.StrictMode>,
  document.getElementById("root")
);
