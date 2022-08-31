import React from 'react'

const AdmiMenus = () => {
  return (
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
            <th className="intro-celda">{producto._id}</th>
            <th>
              <img className="intro-img" src={producto.img} />
            </th>
            <th className="intro-celda">{producto.nombre}</th>
            <th className="intro-celda">{producto.precio}</th>
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
                
                onClick={handleShow}
                className="btn btn-danger"
              >
                eliminar
              </button>
            </th>
          </tr>
            {/* Inicio del modal de menus */}
           <Modal
           show={show}
           onHide={handleClose}
           animation={false}
           className="modal"
         >
           <Modal.Header closeButton className="bg-dark text-light border-dark">
             <Modal.Title className="bg-dark text-light">Confirmar</Modal.Title>
           </Modal.Header>
           <Modal.Body className="bg-dark text-light">
             ¿Esta seguro que desea eliminar el menu?
           </Modal.Body>
           <Modal.Footer className="bg-dark text-light border-dark">
             <Button variant="secondary" onClick={handleClose}>
               Cancelar
             </Button>
             <Button variant="danger" id={producto._id} onClick={menusDelete}>
               Eliminar
             </Button>
           </Modal.Footer>
         </Modal></>
          
        ))}
      </tbody>
    </Table>
    :
    <div className="text-center m-5"><Spinner animation="border" variant="light" /></div>
    }
    {/* fin de la tabla menus */}

  
   
  </div>
  )
}

export default AdmiMenus