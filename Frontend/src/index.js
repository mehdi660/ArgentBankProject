import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./style/header.css";
import "./style/index.css";
import "./style/banner.css";
import "./style/description.css";
import "./style/footer.css";
import "./style/loginForm.css";
import "./style/error.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
