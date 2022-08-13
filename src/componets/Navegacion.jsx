import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Header from '../componets/Header'
import logo from '../assets/hoxton_logo_recortado.png';
import { BsSearch } from 'react-icons/bs';
import {NavLink} from 'react-router-dom'
import '../styles/style.css'


function Navegacion() {
  return (
    <>  
    <Header/> 
      <Navbar className=' nav' variant="dark" >
          <Container  className='d-flex'>
          <Navbar.Brand >
            <img
              src={logo}
              width="130"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav>
          <NavLink className='nav-link' to='/'>Home</NavLink>
          <NavLink className='nav-link' to='nosotros'>Nosotros</NavLink>
          
          </Nav>
          <Form className='d-flex'>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> <BsSearch  className='text-light lupa '/>
          </Form>
          </Container>
      </Navbar>
    </>
  );
}

export default Navegacion;