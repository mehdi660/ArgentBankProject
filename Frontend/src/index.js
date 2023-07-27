import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/header.css";
import "./style/index.css";
import "./style/banner.css";
import "./style/description.css";
import "./style/footer.css";
import "./style/loginForm.css";
import "./style/error.css";
import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
