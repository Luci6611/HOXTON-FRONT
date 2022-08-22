

import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'

import Navegacion from '../componets/Navegacion'
import Error from '../pages/Error'



import Home from "../pages/Home";
import SobreNosotros from '../pages/SobreNosotros'
import FormularioContacto from "../pages/FormularioContacto"

const RoutesDos = () => {
  return (
    ReactDOM.createRoot(document.getElementById('root')).render(
    
      <BrowserRouter>
      <Navegacion/>
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='About' element={<SobreNosotros/>}/>
        <Route path='Contacto' element={<FormularioContacto/>}/>
      
    
      </Routes>
      </BrowserRouter>
     
    )
  );
};

export default RoutesDos;
