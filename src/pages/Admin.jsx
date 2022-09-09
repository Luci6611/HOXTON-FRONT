import React, { useEffect, useState } from "react";
import { traer, eliminar, actualizar, actualizarEstado } from "../helpers/fetchAdmin";
import "../styles/admin.css";
import NavAdmin from "../componets/NavAdmin";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import ModalCrearMenus from "../componets/ModalCrearMenus";
import ModalActualizarmenus from "../componets/ModalActualizarmenus";
import ModalCrearUsuario from "../componets/ModalCrearUsuario";
import ModalEliminarMenus from "../componets/ModalEliminarMenus";
import ModalEliminarUsuarios from "../componets/ModalEliminarUsuarios";


const Administrador = () => {

  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [pedidos, setPedidos] = useState([]);

  // estado Modal crear menus

   const [show, setShow] = useState(false);
   const handleShow = () => setShow(true);
  // estado Modal actualizar menus
  const [showPut, setShowPut] = useState(false);

  // estado Modal Crear Usuarios
  const [showUsersPost, setShowUsersPost] = useState(false);
  const handleUsersPostShow = () => setShowUsersPost(true);

  /* ESTADO MODALES ELIMINAR */

  const [showEliminar, setshowEliminar] = useState(false);

  const closeEliminar = () => setshowEliminar(false);
  const showEliminarmenu = () => setshowEliminar(true);

  const [showEliminarUsuario, setshowEliminarUsuario] = useState(false);

  /* Eliminar usuarios */

  const closeEliminarusuarios = () => setshowEliminarUsuario(false);
  const showEliminarmenuusuarios = () => setshowEliminarUsuario(true);

  // estado para guardar datos

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

  /* Traer datos */

  const recibirData = async () => {
    // menus
    const datosMenu = await traer("menus?limite=0&desde=0");
    const dataMenu = datosMenu.data.menus;
    setProductos(dataMenu);
    // usuarios
    const datosUsuarios = await traer("usuarios?limite=0&desde=0");
    const dataUsuarios = datosUsuarios.data.usuarios;
    setUsuarios(dataUsuarios);
    // pedidos
    const datosPedidos = await traer("pedidos?limite=0&desde=0");
    const dataPedidos = datosPedidos.data.pedidos;

    setPedidos(dataPedidos);
  };

  /* Actualizar Menus */
  const abrirCerrarModalEditar = () => {
    setShowPut(!showPut);
  };

  const actualizarDatos = (datos) => {
    setProductoSeleccionado(datos);
    abrirCerrarModalEditar();
    alert("menu actualizado correctamente");
  };

    /* recibir datos de los modales */

    /* menus */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductoSeleccionado((prevState) => ({ ...prevState, [name]: value }));
  };

  /* usuarios */

  const usuariosChange = (e) => {
    const { name, value } = e.target;
    setusuariosSelecionados((prevState) => ({ ...prevState, [name]: value }));
  };

  // funcion para inactivar menus

  const menusDelete = (area,id) => {
    eliminar(area, id);
    alert("menu eliminado correctamente");
  };

  /* funcion inactivar usuarios */  

  const usuariosDelete = (area,id) => {
    eliminar(area, id);
    alert("usuario inactivado correctamente");
  };

  useEffect(() => {
    setTimeout(() => {
      recibirData();
    }, 2000);
  }, []);


  // function para entregar pedido

  const pedidoListo = (e) => {
    let pedidoPut = e.target.id;
    let estado= !true;
    actualizarEstado( "pedidos", pedidoPut, estado);
    alert("pedido actualizado correctamente");

  };
  
  return (
    <>
      {/* inicio de la tabla menus */}
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
                        className="btn btn-primary "
                      >
                        actualizar
                      </button>
                      <button onClick={showEliminarmenu}  className="btn btn-danger">
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
        {/* fin de la tabla menus */}
      </div>
      <NavAdmin />
      {/* inicio tabla usuarios */}
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
                        onClick={showEliminarmenuusuarios}
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
        {/* fin de la tabla usuarios */}
      </div>
      <NavAdmin />
      {/* inicio de tabla pedidos */}
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
                    <th className="intro-celda">{Date(pedido.fecha)}</th>
                    <th className="intro-celda">{pedido.menu.nombre}</th>
                    <th className="intro-celda">{pedido.menu.precio}</th>
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

      {/* --------------------------- MODALES :-------------------------------- */}

      {/* Modal Eliminar */}

      <ModalEliminarMenus menus={productoSeleccionado._id} eliminar={menusDelete}  cerrar={closeEliminar} showMenu={showEliminar} setMenu={setshowEliminar}/>
      <ModalEliminarUsuarios usuarios={usuariosSelecionados.userId} eliminar={usuariosDelete} cerrar={closeEliminarusuarios} showUsuario={showEliminarUsuario} setUsuario={setshowEliminarUsuario}/>

      {/* Modal CREAR Menu */}

      <ModalCrearMenus menus={productoSeleccionado}  funcionRecibir={handleChange} setShow={setShow} show={show} />
     
      {/* Modal ACTUALIZAR Menu */}

       <ModalActualizarmenus menus={productoSeleccionado}  funcionRecibir={handleChange}  setShowPut={setShowPut} show={show} showPut={showPut}/>

      {/* Modal CREAR USUARIO */}
      <ModalCrearUsuario menus={usuariosSelecionados}  changeUsuario={usuariosChange} setShowUsersPost={setShowUsersPost} showUsersPost={showUsersPost} />

    </>
  );
};

export default Administrador;
