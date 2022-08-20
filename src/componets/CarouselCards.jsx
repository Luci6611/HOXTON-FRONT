import React from 'react'
import Carrousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import '../styles/carousel-cards.css'
import { apiHoxton } from "../helpers/apiHoxton";
import 'axios'
import { useState } from 'react';

const res = await  apiHoxton.get('menus');

const CarouselCards = (props) => {
 

  const { categoria,detalle, nombre, precio, imagen} = props;

  const actualizar = () =>{
  console.log('9')
  };

   const data = res.data.menus; 
   console.log(data)
  

  return (
    
    <> 
    <h1 className='text-light text-center'>{data[0].categoria.nombre}</h1>
    <Carrousel className='item'>
         
    {
    
      
      data.map( ( element, index) => {
          return ( 
           <Carrousel.Item className='item'>
     <div className="cards-wrapper ">
    <div className="card" key={element.index}>
      <img src={element.img} className="card-img-top" alt="imagen-producto"/>
      <div className="card-body">
        <h5 className="card-title">{data[index].nombre}</h5>
        <p className="card-text">{element.detalle}</p>
        <h5 className="card-title">$ {element.precio}</h5>
        <a href="#" className="btn btn-danger">añadir al carrito</a>
      </div>
    </div>
    </div> 
    <div className="cards-wrapper ">
    <div className="card" key={element._id}>
      <img src={element.img} className="card-img-top" alt="imagen-producto"/>
      <div className="card-body">
        <h5 className="card-title">{data[index].nombre}</h5>
        <p className="card-text">{element.detalle}</p>
        <h5 className="card-title">$ {element.precio}</h5>
        <a href="#" className="btn btn-danger">añadir al carrito</a>
      </div>
    </div>
    </div> 
    <div className="cards-wrapper ">
    <div className="card" key={element._id}>
      <img src={element.img} className="card-img-top" alt="imagen-producto"/>
      <div className="card-body">
        <h5 className="card-title">{data[index].nombre}</h5>
        <p className="card-text">{element.detalle}</p>
        <h5 className="card-title">$ {element.precio}</h5>
        <a href="#" className="btn btn-danger">añadir al carrito</a>
      </div>
    </div>
    </div> 
    <div className="cards-wrapper  ">
    <div className="card" key={element.index}>
      <img src={element.img} className="card-img-top" alt="imagen-producto"/>
      <div className="card-body">
        <h5 className="card-title">{data[index].nombre}</h5>
        <p className="card-text">{element.detalle}</p>
        <h5 className="card-title">$ {element.precio}</h5>
        <a href="#" className="btn btn-danger">añadir al carrito</a>
      </div>
    </div> 
    </div> 
     <a className="carousel-control-prev" href="#"  role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
  <a className="carousel-control-next" href="#"  role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
</Carrousel.Item>

    )})}  
 
      </Carrousel>
  </>  
  )
    };

export default CarouselCards