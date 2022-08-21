import React from "react";
import Carousel from "../componets/Carousel";
import { Helmet } from "react-helmet";
import CarouselCards from "../componets/CarouselCards";
import Footer from "../componets/Footer";
import favicon from "../assets/favicon_(1).ico";
import "../styles/carousel-cards.css";
import "react-bootstrap";
import 'axios';


const Home = () => {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        <link rel="stylesheet" href={"https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"}/>
        <link rel="stylesheet" href={"https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css"}/>
        <title>Home</title>
      </Helmet>
      <Carousel />
  {/*     {data.map(element => {
        return (
          <CarouselCards key={element._id} categoria = {element.categoria.nombre} detalle = {element.detalle}  nombre={element.nombre} precio={element.precio} imagen={element.img} />
        )       
      })}     */}
       <CarouselCards/> 
      <Footer />
    </>
  );
};

export default Home;
