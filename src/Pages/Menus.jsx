import React, { useEffect, useState } from "react";
import  traerMenusPag  from "../helpers/fetchMenuspag";
import BtnPagination from "../componets/BtnPagination";
import favicon from "../assets/favicon_(1).ico";
import { Helmet } from "react-helmet";
import CarouselCards from "../componets/CarouselCards";
import "../styles/menus.css"

const Menus = () => {
  const [menus, setMenus] = useState([]);
  const [total, setTotal] = useState(0);

  const [registro, setRegistro] = useState(0);

  useEffect(() => {
    cargarMenus();
  }, [registro]);

  const cargarMenus = async () => {
    const { menus, total } = await traerMenusPag(registro);
    console.log(menus);
    setMenus(menus);
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
   <> <Helmet>
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href={favicon} type="image/x-icon" />
  
    <title>Menus</title>
  </Helmet>
  <div className="row fila-titulo">
      <div className="col">
        <h1 className="menus-titulo">Nuestros Menus</h1>
        <hr />
      </div>
    </div>
    <div className="container contenedor-menus  ">
   
    <div className="row fila-menus   row-cols-1 row-cols-md-3 g-4 mb-2">
      {menus.map((menus) => (
        <div className="col columnas-menus" key={menus._id}>
          <div className="card h-100">
            <img
              src={
                menus?.img
                  ? menus.img
                  : "https://dam.cocinafacil.com.mx/wp-content/uploads/2021/04/licor-de-cafe-con-leche.jpg"
              }
              className="card-img-top"
              alt="cafe"
            />
            <div className="card-body d-flex flex-column    ">
              
              <h5 className="card-title nombre-menu ">{menus.nombre}</h5>
            
              <p className="card-text mt-2 menus-detalle" >{menus.detalle}</p>
              
              
              <span className="badge mb-3 p-2  rounded-pill bg-success precio">
                ${menus.precio}
              </span>
           
              {menus.disponible ? (
              <>  <span className="badge  p-2  rounded-pill bg-warning ms-2 disponible">
                  Disponible
                </span>
                <button className="btn btn-danger m-3 ">Hacer Pedido</button></>  
              ) : (
              <span className="badge rounded-pill bg-danger ms-2">
                  No disponible
                </span>
                
              )}
              
            </div>
          </div>
        </div>
      ))}
    </div>
   
  </div>
  <div className="row ">
      <div className="col d-flex justify-content-center ">
        <BtnPagination  
          registro={registro}
          total={total}
          prevPag={prevPag}
          nextPag={nextPag}
        />
      </div>
    </div></>
);
};

export default Menus;
