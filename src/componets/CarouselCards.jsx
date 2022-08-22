import React from 'react'
import { useState , useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import '../styles/carousel-cards.css'
import  {homeProducts} from "../helpers/homeProducts";
import 'axios'


const CarouselCards = () => {
 
 const [productos, setProductos] = useState([]);
 const [actualizar, setActualizar] = useState([]);

 const cambiar = async  () => {
    
    const datos = await homeProducts.get(`menus?limite=3&desde=${actualizar}`);
    
    const data = datos.data;
    
    setProductos(data.menus);
    setActualizar(productos.id);
  };


 
/* 
  const useActualizar = () => {

  const pizzas =() =>   Productos(0+1);
  const papas =() =>   Productos(0+1);
  const Hamburguesas =() =>   Productos(0+1);
  const bebidas =() =>   Productos(0+1);
  const postres =() =>   Productos(0+1);

  };
    */

   useEffect(() => {

    cambiar()
    
    return () => {


       cambiar()
    }
   }, [])
   

 
  return (
    
    <> 
    <h1 className='text-light text-center' >Pizzas</h1>
   <div className="cards-wrapper item ">
     {
      productos.map( (producto)  => (
           <>
     
    <Card className="card" key={producto.id} >
      <img src={producto.img} className="card-img-top" alt="imagen-producto"/>
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">{producto.detalle}</p>
        <h5 className="card-title">$ {producto.precio}</h5>
        <a href="#" className="btn btn-danger">añadir al carrito</a>
      </div>
    </Card>
          
</>
    ) )})
</div>
   <h1 className='text-light text-center'>Papas</h1>
<div className="cards-wrapper item ">
     {
      productos.map( (producto)  => (
           <>
     
    <Card className="card" key={producto._id}>
      <img src={producto.img} className="card-img-top" alt="imagen-producto"/>
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">{producto.detalle}</p>
        <h5 className="card-title">$ {producto.precio}</h5>
        <a href="#" className="btn btn-danger">añadir al carrito</a>
      </div>
    </Card>
          
</>
    ) )})
</div>
    <h1 className='text-light text-center'>Hamburguesas</h1>
<div className="cards-wrapper item ">

     {
      productos.map( (producto)  => (
           <>
     
    <Card className="card" key={producto._id}>
      <img src={producto.img} className="card-img-top" alt="imagen-producto"/>
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">{producto.detalle}</p>
        <h5 className="card-title">$ {producto.precio}</h5>
        <a href="#" className="btn btn-danger">añadir al carrito</a>
      </div>
    </Card>
          
</>
    ) )})
</div>
  <h1 className='text-light text-center'>Bebidas sin Alcohol</h1>
<div className="cards-wrapper item ">
     {
      productos.map( (producto)  => (
           <>
     
    <Card className="card" key={producto._id}>
      <img src={producto.img} className="card-img-top" alt="imagen-producto"/>
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">{producto.detalle}</p>
        <h5 className="card-title">$ {producto.precio}</h5>
        <a href="#" className="btn btn-danger">añadir al carrito</a>
      </div>
    </Card>
          
</>
    ) )})
</div>
  <h1 className='text-light text-center'>Papas</h1>
<div className="cards-wrapper item ">
     {
      productos.map( (producto)  => (
           <>
     
    <Card className="card" key={producto._id}>
      <img src={producto.img} className="card-img-top" alt="imagen-producto"/>
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">{producto.detalle}</p>
        <h5 className="card-title">$ {producto.precio}</h5>
        <a href="#" className="btn btn-danger">añadir al carrito</a>
      </div>
    </Card>
          
</>
    ) )})
</div>
  <h1 className='text-light text-center'>Postres</h1>
<div className="cards-wrapper item ">
     {
      productos.map( (producto)  => (
           <>
     
    <Card className="card" key={producto._id}>
      <img src={producto.img} className="card-img-top" alt="imagen-producto"/>
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">{producto.detalle}</p>
        <h5 className="card-title">$ {producto.precio}</h5>
        <a href="#" className="btn btn-danger">añadir al carrito</a>
      </div>
    </Card>
          
</>
    ) )})
</div>
  </>  
  
  )

    };

export default CarouselCards