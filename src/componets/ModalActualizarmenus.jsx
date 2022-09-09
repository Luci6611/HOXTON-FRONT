import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { actualizar } from '../helpers/fetchAdmin'

const ModalActualizarmenus = (props) => {

    const {menus,funcionRecibir, setShowPut, show, showPut,} = props;

    const handleUsersPostClose = () => setShowPut(false);

  return (
    <>
    <Modal show={showPut} onHide={handleUsersPostClose}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar menu</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>id</Form.Label>
            <Form.Control
              type="string"
              placeholder="ingresar url"
              autoFocus
              name="id"
              value={menus.id}
              onChange={funcionRecibir}
            />
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="string"
              placeholder="ingresar url"
              autoFocus
              name="img"
              value={menus.img}
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
              value={menus.nombre}
            />
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="string"
              maxLength="6"
              minLength="1"
              placeholder="ingresar precio"
              autoFocus
              name="precio"
              value={menus.precio}
              onChange={funcionRecibir}
            />
            <Form.Label className="m-2">Estado</Form.Label>
            <select
              name="estado"
              id="estado"
              form="estado"
              onChange={funcionRecibir}
              value={menus.estado}
            >
                <option >Seleccionar</option>
              <option value="false">No disponible</option>
              <option value="true">disponible</option>
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
              value={menus.detalle}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleUsersPostClose}>
          Cerrar
        </Button>
        <Button
          variant="primary"
          onClick={() => actualizar("menus", menus)}
        >
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default ModalActualizarmenus