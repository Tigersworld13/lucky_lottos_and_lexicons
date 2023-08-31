import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';




function NavbarHeader({ setCurrentRoute }) {
  return (
  <div className='navbarbackgrnd'>
    <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">Luck, Lexicons and Lotto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

        <Nav.Link href="/">Home</Nav.Link> {/* Link to the WelcomePage */}
        <Nav.Link href="/login">Login</Nav.Link> {/* Link to the Login page */}


          <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Link to the WelcomePage */}
              <Nav.Link as={Link} to="/login">Login</Nav.Link> {/* Link to the Login page */}
              <Nav.Link as={Link} to="/register">Register</Nav.Link> {/* Link to the Register page */}
              <Nav.Link as={Link} to="/LuckyHoroscope">Luck n Lexicons</Nav.Link> {/* Link to the Register page */}
            <button className="navbar-button" onClick={() => setCurrentRoute('Login')}>
            Home
            </button>
            <button className="navbar-button" onClick={() => setCurrentRoute('link')}>
                Link
              </button>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>;
</div>
  )
}



export default NavbarHeader;
