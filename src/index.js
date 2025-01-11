import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importa tu componente principal
import "./index.css"; // Estilos globales

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);