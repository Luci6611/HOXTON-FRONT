import React from 'react'
import '../styles/style.css'
import {Link} from 'react-router-dom'
import logoR from "../img/hoxton_logo.jpg"

const footer = () => {
  return ( 
  <div>
    <footer className='text-white py-4 bg-dark'>
      <div className='container'>
        <nav className='row'>
          <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justify-content-center'>
            <img src={logoR} alt="Hoxton" className='mx-2' height='80'/>
          </Link>
          <ul className='col-12 col-md-3 list-unstyled'>
            <li className='font-weight-bold mb-2'>Hoxton</li>
            <li className='text-center'>En este sitio web podras encontrar los mejores tragos de Rosario</li>
          </ul>
          <ul className='col-12 col-md-3 list-unstyled'>
            <li className='font-weight-bold mb-2'>Enlaces</li>
            <li>
              <Link to='/' className='text-reset'>Hoxton</Link>
            </li>
            <li>
              <Link to='/'  className='text-reset'>Menus</Link>
            </li>

          </ul>
          <ul className='col-12 col-md-3 list-unstyled'>
            <li className='font-weight-bold mb-2'>Siguenos</li> 
            <li className='d-flex justify-content-between'>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter"></i>
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