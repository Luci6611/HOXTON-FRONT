

import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'

import Navegacion from '../componets/Navegacion'
import Error from '../pages/Error'
import AboutScreen from '../pages/AboutScreen'


import Home from "../pages/Home";

const RoutesDos = () => {
  return (
    ReactDOM.createRoot(document.getElementById('root')).render(
    
      <BrowserRouter>
      <Navegacion/>
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Error/>}/>
      
    
      </Routes>
      </BrowserRouter>
     
    )
  );
};

export default RoutesDos;
