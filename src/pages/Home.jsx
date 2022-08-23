import React from "react";
import Carousel from "../componets/Carousel";
import { Helmet } from "react-helmet";
import CarouselCards from "../componets/CarouselCards";
import Footer from "../componets/Footer";
import favicon from "../assets/favicon_(1).ico";
import "../styles/carousel-cards.css";
import "react-bootstrap";


const Home = () => {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      
        <title>Home</title>
      </Helmet>
      <Carousel />

       <CarouselCards/> 
      <Footer />
    </>
  );
};

export default Home;
