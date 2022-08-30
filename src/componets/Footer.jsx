import React from 'react'
import '../styles/style.css'
import { BsFacebook } from "react-icons/bs";
import {Link} from 'react-router-dom'
import logoR from "../img/hoxton_logo.jpg"

const footer = () => {
  return ( 
  <div>
    <footer className='text-white py-4 bg-dark'>
      <div className='container'>
        <nav className='row d-flex justify-content-center'>
          <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justify-content-center'>
            <img src={logoR} alt="Hoxton" className='mx-2' height='80'/>
          </Link>
          <ul  className='text-center col-12 col-md-3 list-unstyled'>
          <li className='font-weight-bold mb-2'>Hoxton</li>
            <li className='text-center'>En este sitio web podras encontrar los mejores tragos de Capital federal</li>
      
       </ul>
          <ul className='col-12 col-md-3 list-unstyled'>
            <li className='font-weight-bold mb-2'>Siguenos</li> 
            <li className='d-flex justify-content-between '>
           <a href="https://www.facebook.com/Restaurante-Hoxton-110290108472772">
               <BsFacebook  className="text-primary icons fs-3"/></a>
               
              <i className="bi bi-instagram"></i>
            </li>
          </ul>
          <div className='container'>
            <p className='text-center'>Copyright 2022</p>
          </div>
        </nav>
      </div>
    </footer>
  </div>
  )
}



export default footer