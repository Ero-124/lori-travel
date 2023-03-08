import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import LanguageContextProvider from "./context/contextLang";

export const REPO_NAME = "/lori-travel/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter  basename={REPO_NAME}>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
