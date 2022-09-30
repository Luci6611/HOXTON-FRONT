import React, { useEffect, useState } from "react";
import  traerPedidos from "../helpers/fetchPedidos";
import BtnPagination from "../componets/BtnPagination";
import favicon from "../assets/favicon_(1).ico";
import { Helmet } from "react-helmet";

import "../styles/pedidos.css"

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [total, setTotal] = useState(0);

  const [registro, setRegistro] = useState(0);

  useEffect(() => {
    cargarPedidos();
  }, [registro]);

  const cargarPedidos = async () => {
    const { pedidos, total } = await traerPedidos(registro);
  
    setPedidos(pedidos);
    setTotal(total);
  };

  const nextPag = () => {
  
    if (total - registro >= 5) {
      setRegistro(registro + 5);
    }
  };

  const prevPag = () => {
    if (registro !== 0) {
      setRegistro(registro - 5);
    }
  };

  return (
   <>
    <Helmet>
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href={favicon} type="image/x-icon" />
    <title>Pedidos</title>
  </Helmet>
    <div className="container p-0 m-0 m-auto contenedor__pedidos justify-content-center align-items-center ">
        <h1 className="pedidos__titulo text-center">Pedidos</h1>
  
    <div className="row  fila__pedidos row-cols-1   row-cols-md-2 row-cols-lg-3 1 m-0">
      {pedidos.map((pedido) => (
        <div className="col columna__pedidos my-2" key={pedido._id}>
          <div className="card h-100 d-flex mx-auto ">
            
            <div className="card-body d-flex flex-column  cuerpo_pedido    ">
              
              <h5 className="card-title nombre-menu__pedido ">{pedido.menu.nombre}</h5>
            
              <p className="card-text usuario__pedido">Cliente: {pedido.usuario.nombre}</p>
              <p className="card-text  usuario__pedido "> identificacion: {pedido.usuario.userId}</p>

              <p className="card-text  usuario__pedido">Horario: {pedido.fecha.split("T",1)}</p>
              <p className="card-text  usuario__pedido ">Precio: ${pedido.menu.precio}</p>
              
              {pedido.entrega === false ?  <span className="badge mb-3 p-2  rounded-pill bg-danger precio">Pendiente</span> :  <span className="badge mb-3 p-2  rounded-pill bg-success precio">Entregado</span> }
             
              
              
           
              
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="row">
      <div className="col d-flex justify-content-center">
        <BtnPagination
          registro={registro}
          total={total}
          prevPag={prevPag}
          nextPag={nextPag}
        />
      </div>
    </div>
  </div></>
);
};

export default  Pedidos;
