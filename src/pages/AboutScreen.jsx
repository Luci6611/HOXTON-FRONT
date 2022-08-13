import React from 'react'
import {Helmet} from "react-helmet";
import favicon from '../assets/favicon_(1).ico'


const AboutScreen = () => {
  return (
    <>
    <Helmet>  
        <title>Nosotros</title> 
        <link rel="shortcut icon" href={favicon} />
    </Helmet>

    </>
  )
}

export default AboutScreen