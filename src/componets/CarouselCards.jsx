import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import "../styles/carousel-cards.css";
import { homeProducts } from "../helpers/homeProducts";
import { Navigate,useNavigate } from "react-router-dom";
import "axios";

const CarouselCards = () => {
  const [productos, setProductos] = useState([]);
  const [papas, setPapas] = useState([]);
  const [hamburguesas, setHamburguesas] = useState([]);

  const cambiar = async () => {
   
    const datos = (await homeProducts.get(`menus?limite=3&desde=0`)).data;
    const data = datos.menus;
    setProductos(data);
 
    const papas = (await homeProducts.get(`menus?limite=3&desde=6`)).data;
    const data_papas = papas.menus;
    setPapas(data_papas);
    
    const hamburguesas = (await homeProducts.get(`menus?limite=3&desde=12`)).data;
    const data_hamburguesas = hamburguesas.menus;
    setHamburguesas(data_hamburguesas);
  };

  useEffect(() => {
    setTimeout(() => {
      cambiar();
    }, 2000);
    
  }, []);
  const navigate = useNavigate();
  return (
   
    <>
    <div>
      <h1 className="card__vendido">Lo mas Vendido</h1>
    {productos.length > 0  ?
     <>
      <h2 className="text-light text-center">Pizzas</h2>
       <div className="cards-wrapper item ">
      
         {productos.map((producto) => (
             
             <Card className="card" key={producto._id}>
               <img
                 src={producto.img}
                 className="card-img-top"
                 alt="imagen-producto"
               />
               <div className="card-body">
                 <h5 className="card-title">{producto.nombre}</h5>
                 <p className="card-text">{producto.detalle}</p>
                 <h5 className="card-title">$ {producto.precio}</h5>
                 <button onClick={()=>navigate("/menus")}    className="btn btn-danger my-2">
                      Ver en menus 
                 </button>
               </div>
             </Card>
              
         ))}
         
       </div>
      
       <h2 className="text-light text-center">Papas</h2>
       <div className="cards-wrapper item ">
         {papas.map((producto) => (
             
             <Card className="card" key={producto._id}>
               <img
                 src={producto.img}
                 className="card-img-top"
                 alt="imagen-producto"
               />
               <div className="card-body">
                 <h5 className="card-title">{producto.nombre}</h5>
                 <p className="card-text">{producto.detalle}</p>
                 <h5 className="card-title">$ {producto.precio}</h5>
                 <button onClick={()=>navigate("/menus")}    className="btn btn-danger my-2">
                      Ver en menus 
                 </button>
               </div>
             </Card>
              
          ))}
         
       </div>
       <h2 className="text-light text-center">Hamburguesas</h2>
       <div className="cards-wrapper item ">
         {hamburguesas.map((producto) => (
             
             <Card className="card" key={producto._id}>
               <img
                 src={producto.img}
                 className="card-img-top"
                 alt="imagen-producto"
               />
               <div className="card-body">
                 <h5 className="card-title">{producto.nombre}</h5>
                 <p className="card-text">{producto.detalle}</p>
                 <h5 className="card-title">$ {producto.precio}</h5>
                 <button onClick={()=>navigate("/menus")}  className="btn btn-danger my-2">
                      Ver en menus 
                 </button>
              </div>
             </Card>
         ))} 
       </div> 
    </>
    :
    <div className="d-flex justify-content-around placeholder" >
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
      
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>
    </div>
    } </div></> 
  )

};

export default CarouselCards;
