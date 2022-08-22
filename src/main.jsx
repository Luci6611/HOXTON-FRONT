

import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import RouterApp from "./routes/RouterApp";




import "../src/styles/carousel-cards.css"
import "../src/styles/style.css"
import "../src/styles/LoginScreen.css";
import "../src/styles/Registro.css"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterApp />

  </React.StrictMode>
);


