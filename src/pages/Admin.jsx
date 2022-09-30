import React, { useEffect, useState } from "react";
import { traer, eliminar, actualizar, actualizarEstado } from "../helpers/fetchAdmin";
import "../styles/admin.css";
import NavAdmin from "../componets/NavAdmin";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import ModalCrearMenus from "../componets/ModalCrearMenus";
import ModalActualizarmenus from "../componets/ModalActualizarmenus";
import ModalCrearUsuario from "../componets/ModalCrearUsuario";
import { Helmet } from "react-helmet";


const Administrador = () => {

  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [pedidos, setPedidos] = useState([]);

  

   const [show, setShow] = useState(false);
   const handleShow = () => setShow(true);

  const [showPut, setShowPut] = useState(false);


  const [showUsersPost, setShowUsersPost] = useState(false);
  const handleUsersPostShow = () => setShowUsersPost(true);




  const [productoSeleccionado, setProductoSeleccionado] = useState({
    _id: "",
    img: "",
    nombre: "",
    detalle: "",
    precio: "",
    disponible: "",
    categoria:"",
  });

  const [usuariosSelecionados, setusuariosSelecionados] = useState({
    userId:"",
    nombre: "",
    role: "",
    email: "",
    password: "",
  });



  const recibirData = async () => {

    const datosMenu = await traer("menus?limite=0&desde=0");
    const dataMenu = datosMenu.data.menus;
    setProductos(dataMenu);
 
    const datosUsuarios = await traer("usuarios?limite=0&desde=0");
    const dataUsuarios = datosUsuarios.data.usuarios;
    setUsuarios(dataUsuarios);

    const datosPedidos = await traer("pedidos?limite=0&desde=0");
    const dataPedidos = datosPedidos.data.pedidos;

    setPedidos(dataPedidos);
  };


  const abrirCerrarModalEditar = () => {
    setShowPut(!showPut);
  };

  const actualizarDatos = (datos) => {
    setProductoSeleccionado(datos);
   
    alert("menu actualizado correctamente");
     abrirCerrarModalEditar();
  };

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductoSeleccionado((prevState) => ({ ...prevState, [name]: value }));
  };



  const usuariosChange = (e) => {
    const { name, value } = e.target;
    setusuariosSelecionados((prevState) => ({ ...prevState, [name]: value }));
  };



  const menusDelete = (e) => {
    let id = e.target.id;
    eliminar("menus", id);
    alert("menu eliminado correctamente");
  };

  

  const usuariosDelete = (e) => {
    let id = e.target.id;
    eliminar("usuarios", id);
    alert("usuario inactivado correctamente");
  };

  useEffect(() => {
    setTimeout(() => {
      recibirData();
    }, 2000);
  }, []);




  const pedidoListo = (e) => {
    let pedidoPut = e.target.id;
    let estado= !true;
    actualizarEstado( "pedidos", pedidoPut, estado);
    alert("pedido actualizado correctamente");

  };
  
  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Administracion</title>
            </Helmet>


      <NavAdmin />
      <div className="table-responsive-lg">
        <h1 className="titulo__seccion text-light text-center" id="menus">
          Menus
        </h1>
        {productos.length > 0 ? (
          <Table striped bordered hover variant="dark" className="w-75">
            <thead>
              <tr>
                <th>Id</th>
                <th>img</th>
                <th>Nombre</th>
                <th>Detalle</th>
                <th>Precio</th>
                <th>Activo</th>
                <th>
                  <button
                    className="btn btn-success m-0 w-100"
                    onClick={handleShow}
                  >
                    Crear
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <>
                  <tr key={producto._id}>
                    <th className="intro-celda">{producto._id}</th>
                    <th>
                      <img className="intro-img" src={producto.img} />
                    </th>
                    <th className="intro-celda">{producto.nombre}</th>
                    <th className="intro-celda">{producto.detalle}</th>
                    <th className="intro-celda">${producto.precio}</th>
                    <th className="intro-celda">
                      {producto.disponible ? "disponible" : "NO disponible"}
                    </th>
                    <th>
                      <button
                        onClick={() => actualizarDatos(producto)}
                        className="btn btn-primary botones_tablas"
                      >
                        actualizar
                      </button>
                      <button onClick={menusDelete} id={producto._id}  className="btn btn-danger .botones_tablas">
                        eliminar
                      </button>
                    </th>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="text-center m-5">
            <Spinner animation="border" variant="light" />
          </div>
        )}
       
      </div>
      <NavAdmin />
 
      <div className="table-responsive-lg">
        <h1 className="titulo__seccion text-light text-center" id="usuarios">
          Usuarios
        </h1>
        {usuarios.length > 0 ? (
          <Table striped bordered hover variant="dark" className="w-75">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>correo</th>
                <th>Rol</th>
                <th>
                  <button
                    className="btn btn-success m-0 w-100"
                    onClick={handleUsersPostShow}
                  >
                    Crear
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <>
                  <tr key={usuario.userId}>
                    <th className="intro-celda">{usuario.userId}</th>
                    <th className="intro-celda">{usuario.nombre}</th>
                    <th className="intro-celda">{usuario.email}</th>
                    <th className="intro-celda">
                      {usuario.role == "USER_ROLE"
                        ? "USUARIO"
                        : "ADMINISTRADOR"}
                    </th>
                    <th>
                      <button
                      id={usuario.userId}
                        onClick={usuariosDelete}
                        className="btn btn-danger"
                      >
                        Inactivar
                      </button>
                    </th>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="text-center m-5">
            <Spinner animation="border" variant="light" />
          </div>
        )}
       
      </div>
      <NavAdmin />
   
      <div className="table-responsive-lg">
        <h1 className="titulo__seccion text-light text-center" id="pedidos">
          Pedidos
        </h1>
        {pedidos.length > 0 ? (
          <Table striped bordered hover variant="dark" className="w-75">
            <thead>
              <tr>
                <th>fecha</th>
                <th>menu</th>
                <th>precio</th>
                <th>usuario</th>
                <th>id usuario</th>
                <th>entrega</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((pedido) => (
                <>
                  <tr key={pedido.id}>
                    <th className="intro-celda">{pedido.fecha.split("T",1)}</th>
                    <th className="intro-celda">{pedido.menu.nombre}</th>
                    <th className="intro-celda">${pedido.menu.precio}</th>
                    <th className="intro-celda">{pedido.usuario.nombre}</th>
                    <th className="intro-celda">{pedido.usuario.userId}</th>
                    <th className="intro-celda">
                      {pedido.entrega === false ? "Pendiente" : "Entregado"}
                    </th>
                    <th>
                      <button
                        id={pedido._id}
                        onClick={pedidoListo}
                        className="btn btn-danger"
                      >
                        Cambiar
                      </button>
                    </th>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="text-center m-5">
            <Spinner animation="border" variant="light" />
          </div>
        )}
       
      </div>
      <NavAdmin />

    


    

      <ModalCrearMenus menus={productoSeleccionado}  funcionRecibir={handleChange} setShow={setShow} show={show} />
     


       <ModalActualizarmenus menus={productoSeleccionado}  funcionRecibir={handleChange}  setShowPut={setShowPut} show={show} showPut={showPut}/>


      <ModalCrearUsuario menus={usuariosSelecionados}  changeUsuario={usuariosChange} setShowUsersPost={setShowUsersPost} showUsersPost={showUsersPost} />

    </>
  );
};

export default Administrador;
