import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Crear } from '../helpers/fetchAdmin'

const ModalCrearMenus = (props) => {
   
   const {menus,funcionRecibir, setShow , show} = props;
   const handleClose = () => setShow(false);
    
  return (
    <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Crear Menu nuevo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="string"
              placeholder="ingresar url"
              autoFocus
              name="img"
              onChange={funcionRecibir}
            />
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="string"
              maxLength="15"
              minLength="1"
              placeholder=" ingresar nombre"
              autoFocus
              name="nombre"
              onChange={funcionRecibir}
            />

            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="string"
              maxLength="6"
              minLength="1"
              placeholder="ingresar precio"
              autoFocus
              name="precio"
              onChange={funcionRecibir}
            />
            <Form.Label className="m-2">Categoria</Form.Label>

            <select
            onChange={funcionRecibir}
              name="categoria"
              id="categoria"
              form="categoria"        
            >
              <option value="62faa604697b01919cfa4f30">PIZZAS</option>
              <option value="62faa627697b01919cfa4f34">PAPAS</option>
              <option value="62faa63a697b01919cfa4f38">HAMBURGUESAS</option>
              <option value="62faa67b697b01919cfa4f3c">BEBIDAS SIN ALCOHOL</option>
              <option value="62faa690697b01919cfa4f40">TRAGOS</option>
              <option value="62faa6a3697b01919cfa4f44">POSTRES</option>
            </select>
            <Form.Label className="m-2">Estado</Form.Label>

            <select
              name="disponible"
              id="disponible"
              form="disponible"
             
            >
              <option onChange={funcionRecibir} value="false">No disponible</option>
              <option onChange={funcionRecibir} value="true">disponible</option>
            </select>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Detalle</Form.Label>
            <Form.Control
              as="textarea"
              maxLength="100"
              minLength="1"
              rows={3}
              name="detalle"
              onChange={funcionRecibir}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button
          variant="primary"
          onClick={() => Crear("menus", menus)}
        >
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default ModalCrearMenus