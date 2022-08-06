import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/hoxton_logo.jpg';
import '../styles/style.css'
import { BsSearch } from 'react-icons/bs';




function Navegacion() {
  return (
    <>   
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
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#features">Tu pedido</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
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