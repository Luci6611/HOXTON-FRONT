import React from 'react'
import '../styles/style.css'
import imagen1 from '../assets/6624.jpg'
import imagen2 from '../assets/choripan.jpg'


const Cardsportada= () => {
  return (
    <div className='container__imagenes_verticales'>
    <img src={imagen1} alt="sandwich de milanesa" /> 
    <img src={imagen2} alt="choripan" /> 
    </div>
  )
}

export default Cardsportada