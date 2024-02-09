import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/normalize.css";
import "./styles/index.scss";
import App from "./App";

import "./config/i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
