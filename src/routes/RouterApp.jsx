import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "../pages/LoginScreen";
import ProtectedRoutes from "./ProtectedRoutes";
import Registro from "../pages/Registro";
import Admin from "../pages/Admin";
import FormularioContacto from "../pages/FormularioContacto";
import SobreNosotros from "../pages/SobreNosotros";
import Home from "../pages/Home";
import Footer from "../componets/Footer";
import Navegacion from "../componets/Navegacion";
import Error from "../pages/Error";


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
        <Route path="/Admi" element={<Admin/>} />
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='About' element={<SobreNosotros/>}/>
        <Route path='Contacto' element={<FormularioContacto/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default RouterApp;