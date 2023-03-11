import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.scss";
import "../src/styles/common.scss";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import LanguageContextProvider from "./context/contextLang";
import { SkeletonTheme } from "react-loading-skeleton";

export const REPO_NAME = "/lori-travel/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <BrowserRouter basename={REPO_NAME}>
        <LanguageContextProvider>
          <App />
        </LanguageContextProvider>
      </BrowserRouter>
    </SkeletonTheme>
  </React.StrictMode>
);
