import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CharacterContextProvider } from "./context/characterContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <CharacterContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CharacterContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
