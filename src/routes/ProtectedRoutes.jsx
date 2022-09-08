import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  // const [usuarios, setUsuarios] = useState([]);
  
  // const recibirDataUsuarios = async () => {
  //   const datosUsuarios = await traer("usuarios?limite=0&desde=0");
  //   const dataUsuarios = datosUsuarios.data.usuarios;
  //   setUsuarios(dataUsuarios);
  // }

  const token = JSON.parse(localStorage.getItem("token")) || null;

  if (!token ) {
    //redireccionar al login
    return <Navigate to="/login" />;
  } else {
    // ir a la pagina del children
    return children;
  }
};

export default ProtectedRoutes;
