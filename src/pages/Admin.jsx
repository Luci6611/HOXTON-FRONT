import React, { useEffect, useState } from "react";
import { traer, eliminar, actualizar } from "../helpers/fetchAdmin";
import "../styles/admin.css";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const Administrador = () => {

  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

 
  /* Traer datos */

  const recibirData = async  () => {

    const  datosMenu = await  traer('menus');
    const dataMenu = datosMenu.data.menus;
    setProductos(dataMenu);   
    const datosUsuarios= await  traer('usuarios');
    const dataUsuarios = datosUsuarios.data.usuarios;
    setUsuarios(dataUsuarios); 
  };

  /* Actualizar Menus */

  const actualizarMenus = async (e) => {
    const menPut = e.target.id;
    actualizar(menPut, 'menus')
  };

  // funcion para inactivar menus

  const menusDelete =  (e) => {
    const menDelete = e.target.id;
    eliminar("menus", menDelete)
  };

  useEffect(() => {
    setTimeout(() => {
      recibirData();
    }, 2000);
    
  }, []);

  return (
    <>
      <div className="table-responsive-lg">
        <h1 className="titulo__seccion text-light text-center">Menus</h1>
        {productos.length > 0  ?

        <Table striped bordered hover variant="dark" className="w-75">
          <thead>
            <tr>
              <th>Id</th>
              <th>img</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Activo</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <>
              <tr key={producto._id}>
                <th className="intro-celda" >{producto._id}</th>
                <th>
                  <img className="intro-img" src={producto.img} />
                </th>
                <th className="intro-celda">{producto.nombre}</th>
                <th className="intro-celda">${producto.precio}</th>
                <th className="intro-celda">
                  {producto.disponible ? "disponible" : "NO disponible"}
                </th>
                <th>
                  <button
                    onClick={actualizarMenus}
                    id={producto._id}
                    className="btn btn-primary "
                  >
                    actualizar
                  </button>
                  <button
                    id={producto._id}
                    onClick={menusDelete}
                    className="btn btn-danger"
                  >
                    eliminar
                  </button>
                </th>
              </tr>
              </>
      
            ))}
          </tbody>

        </Table>
        :
        <div className="text-center m-5"><Spinner animation="border" variant="light" /></div>
        }
        {/* fin de la tabla menus */}    

      </div>

       <div className="table-responsive-lg">
        <h1 className="titulo__seccion text-light text-center">Usuarios</h1>
        {usuarios.length > 0  ?

        <Table striped bordered hover variant="dark" className="w-75">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>correo</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <>
              <tr >
                <th className="intro-celda"></th>
                <th className="intro-celda">{usuario.nombre}</th>
                <th className="intro-celda">{usuario.email}</th>
                <th className="intro-celda">
                  {usuario.role  == "USER_ROLE" ? "USUARIO" : "ADMINISTRADOR"  }
                </th>
                <th>
                  <button
                    onClick={actualizarMenus}
                    id={usuario._id}
                    className="btn btn-primary "
                  >
                    actualizar
                  </button>
                  <button
                    id={usuario._id}
                    onClick={menusDelete}
                    className="btn btn-danger"
                  >
                    eliminar
                  </button>
                </th>
              </tr>
              </>
      
            ))}
          </tbody>

        </Table>
        :
        <div className="text-center m-5"><Spinner animation="border" variant="light" /></div>
        }
        {/* fin de la tabla usuarios */}    
      </div>
    </>
  );
};

export default Administrador;
