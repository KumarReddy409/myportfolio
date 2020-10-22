import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import profilepic from '../../assets/img/profilepic/myimage.jpg';
import './Header.css';




function Header() {
    return (
        <>
<Navbar fixed="top" expand="md"  variant="dark" className="animate-navbar nav-theme justify-content-between" >
  <Navbar.Brand href="#home">
    
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="#About">About</Nav.Link>
      <Nav.Link href="#Skills">Skills</Nav.Link>
      <Nav.Link href="#Experience">Experience</Nav.Link>
      <Nav.Link href="#Projects">Projects</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

        </>
    )
}

export default Header
