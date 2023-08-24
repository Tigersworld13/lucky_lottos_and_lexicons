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
            <button className="navbar-button" onClick={() => setCurrentRoute('Login')}>
            Home
            </button>
            <button className="navbar-button" onClick={() => setCurrentRoute('link')}>
                Link
              </button>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>;
</div>
  )
}

export default NavbarHeader;
