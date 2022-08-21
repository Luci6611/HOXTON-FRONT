import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import RouterApp from "./routes/RouterApp";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";


import "../src/styles/LoginScreen.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterApp />
  </React.StrictMode>
);