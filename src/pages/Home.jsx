import React from 'react'
import Carousel from '../componets/Carousel'
import {Helmet} from "react-helmet";


const Home = () => {
  return ( 
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
    <Carousel/>
    </>
  )
}

export default Home