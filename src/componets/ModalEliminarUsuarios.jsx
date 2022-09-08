import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalEliminarUsuarios = (props) => {

    const {usuarios , eliminar, cerrar , showUsuario, setUsuario} = props;
    const handleClose = () => setUsuario(false);
    console.log(usuarios)
 
  return (

    <Modal show={showUsuario} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar usuarios</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrar}>
            cancelar
          </Button>
          <Button variant="primary"  onClick={()=> eliminar("usuarios", usuarios)}>
            inactivar
          </Button>
        </Modal.Footer>
        </Modal>
  )
}

export default ModalEliminarUsuarios