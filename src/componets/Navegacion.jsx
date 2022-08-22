import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Header from "../componets/Header";
import logo from "../assets/hoxton_logo_recortado.png";
import { BsSearch } from "react-icons/bs";
import {BsCart4} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../styles/style.css";

function Navegacion() {
  return (
    <>
      <Header />
      <Navbar
        key="sm"
        bg="dark"
        variant="dark"
        expand="sm"
        className=" nav mb-3"
      >
        <Container className="d-flex">
          <Navbar.Brand>
            <img
              src={logo}
              width="130"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-sm"
            aria-labelledby="offcanvasNavbarLabel-expand-sm"
            placement="end"
            className='bg-dark text-light '
          >
            <Offcanvas.Header closeButton >
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="<SobreNosotros/>">
                  Nosotros
                </NavLink>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Search"
                />{" "}
                <BsSearch className="text-light icons " />
                <BsCart4 className="text-light icons " />
              </Form>
              
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navegacion;
