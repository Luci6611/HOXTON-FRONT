import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navegacion from './componets/Navegacion'
import Error from './pages/Error'
import AboutScreen from './pages/AboutScreen'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Navegacion/>
  <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='*' element={<Error/>}/>
    <Route path="nosotros" element={<AboutScreen/>}/>

  </Routes>
  </BrowserRouter>
  </React.StrictMode>
)
