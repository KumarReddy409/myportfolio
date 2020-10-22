import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css';




function Header() {
    return (
        <>
<Navbar fixed="top" expand="md"  className="animate-navbar nav-theme justify-content-between" >
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav ">
    <Nav className="ml-auto " variant="tabs"    defaultActiveKey="#home">
    <Nav.Item>
    <Nav.Link href="#Home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
           <Nav.Link href="#About" >About</Nav.Link>
     </Nav.Item>
      <Nav.Item>
           <Nav.Link href="#Skills">Skills</Nav.Link>
      </Nav.Item>
      <Nav.Item>
            <Nav.Link href="#Experience">Experience</Nav.Link>
      </Nav.Item>
      <Nav.Item>
            <Nav.Link href="#Projects">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
          <Nav.Link href="#Contact">Contact</Nav.Link>
      </Nav.Item>

    </Nav>
    
  </Navbar.Collapse>
</Navbar>

        </>
    )
}

export default Header
