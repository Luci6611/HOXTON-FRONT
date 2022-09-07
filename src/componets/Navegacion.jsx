import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Header from "../componets/Header";
import logo from "../assets/hoxton_logo_recortado.png";
import "../styles/Navegacion.css"
import { BsSearch } from "react-icons/bs";
import {BsCart4} from "react-icons/bs";
import {BsFillPersonFill} from "react-icons/bs";
import {BsPersonPlusFill} from "react-icons/bs";
import { NavLink,Link } from "react-router-dom";
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
          <Navbar.Brand href="/">
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
                <NavLink className="nav-link" to="/Menus">
                  Menus
                </NavLink>
                <NavLink className="nav-link" to="/About">
                  Nosotros
                </NavLink>
                <NavLink className="nav-link" to="/Contacto">
                  Contacto
                </NavLink>
              </Nav>
              <Form className="d-flex align-items-center ">
                <Form.Control
                  type="search"
                  placeholder="Buscar"
                  className="me-2 m-0  barra-busqueda"
                  aria-label="Search"
                />{" "}
                 <Link to="*">
                <BsSearch className="text-light icons " /></Link>
                {/* <Link to="*">   
                <BsCart4 className="text-light icons " /></Link> */}
                      <Link to="/login">
               <BsFillPersonFill  className="text-light icons"/></Link>
               <Link  to="/Registro">
               <BsPersonPlusFill  className="text-light icons "/></Link>         </Form>
                         
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navegacion;
