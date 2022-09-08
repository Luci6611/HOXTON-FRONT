import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { crearUsuarios } from '../helpers/fetchAdmin'

const ModalCrearUsuario = (props) => {

    const {menus, changeUsuario } = props;

    const [showUsersPost, setShowUsersPost] = useState(false);
    const handleUsersPostClose = () => setShowUsersPost(false);

  return (
      <>
        <Modal show={showUsersPost} onHide={handleUsersPostClose}>
          <Modal.Header closeButton>
            <Modal.Title>Dar de alta nuevo usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="string"
                  maxLength="15"
                  minLength="1"
                  placeholder=" ingresar nombre"
                  name="nombre"
                  autoFocus
                  onChange={changeUsuario}
                />  
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  maxLength="40"
                  minLength="1"
                  placeholder="ingresar email"
                  autoFocus
                  required
                  name="email"
                  onChange={changeUsuario}
                />
                  <Form.Label className="m-2">Rol</Form.Label>
                <select
                  name="role"
                  id="role"
                  form="role"
                  onChange={changeUsuario}
                  value={menus.role}
                >
                  <option value="ADMIN_ROLE">administrador</option>
                  <option value="USER_ROLE">usuario</option>
                </select>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  maxlength="15"
                  minLength="8"
                  placeholder="ingresar contraseña"
                  autoFocus
                  name="password"
                  onChange={changeUsuario}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleUsersPostClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={()=> crearUsuarios("usuarios",menus)}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  )
}

export default ModalCrearUsuario