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
    console.log(pedidos);
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
    <div className="container my-5">
    <div className="row">
      <div className="col">
        <hr />
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-3 g-4 mb-2">
      {pedidos.map((pedido) => (
        <div className="col" key={pedido._id}>
          <div className="card h-100">
            
            <div className="card-body d-flex flex-column    ">
              
              <h5 className="card-title nombre-menu ">{pedido.menu.nombre}</h5>
            
              <p className="card-text ">{pedido.usuario.nombre}</p>
              <p className="card-text "> identificacion:{pedido.usuario.userId}</p>

              <p className="card-text ">{Date(pedido.fecha)}</p>
              <p className="card-text ">${pedido.menu.precio}</p>
              
              
              <span className="badge mb-3 p-2  rounded-pill bg-danger precio">
              {pedido.entrega === false ? "Pendiente" : "Entregado" }
              </span>
           
              
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="row">
      <div className="col">
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
