import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "../pages/LoginScreen";
import ProtectedRoutes from "./ProtectedRoutes";
import Registro from "../pages/Registro";
import Navegacion from "../componets/Navegacion";
import Footer from "../componets/Footer";



const RouterApp = () => {
  return (
    <BrowserRouter>
      <Navegacion/>

      <Routes>
        <Route
          path="/cosa"
          element={
            <ProtectedRoutes/>
          }
        />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/Registro" element={<Registro />} />
    


      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default RouterApp;