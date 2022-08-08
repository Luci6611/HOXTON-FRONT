import React from 'react'
import imagenError from '../assets/curiosos-diseños-paginas-de-error-404-12-removebg.png'
import '../styles/style.css'

const Error = () => {
  return (
    <img className='error' src={imagenError} alt="imagen - error 404"/>
  )
}

export default Error