import React from "react";
import ReactDOM from "react-dom/client";
import App from "./root/App/index";
import "./root/css/global.css";
import "antd/dist/antd.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
