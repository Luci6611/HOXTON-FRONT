import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalEliminarMenus = (props) => {

  const {menus ,eliminar , cerrar,showMenu , setMenu} = props;
  const handleClose = () => setMenu(false);
  console.log(menus)
  
  return (
    <Modal show={showMenu} onHide={handleClose}>

    <Modal.Header closeButton>
      <Modal.Title>Eliminar menus</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <p>Modal body text goes here.</p>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={cerrar}>cancelar</Button>
      <Button variant="danger" onClick={()=> eliminar("menus", menus)}>inactivar</Button>
    </Modal.Footer>
  </Modal>
  
);
}

export default ModalEliminarMenus