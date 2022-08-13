import React from 'react'
import {Helmet} from "react-helmet";
import imagenError from '../assets/curiosos-diseños-paginas-de-error-404-12-removebg.png'
import favicon from '../assets/favicon_(1).ico'
import '../styles/style.css'

const Error = () => {
  return ( 
  <>
       <Helmet>
                <meta charSet="utf-8" />
                <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
                <title>Error 404</title>
            </Helmet>
    <img className='error' src={imagenError} alt="imagen - error 404"/>
    </>
  )
}

export default Error