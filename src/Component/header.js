import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {LinkContainer} from 'react-router-bootstrap';

const options1 = (
  <Fragment>
    <Nav.Link href="/login">Login</Nav.Link>
  </Fragment>
)
const options2 = (
    <Fragment>
      <Nav.Link href="/">Welcome</Nav.Link>
      <Nav.Link href="/">Search</Nav.Link>
      <Nav.Link href="/">History</Nav.Link>
    </Fragment>
  )

const Header = ({ user }) => (
    
  <Navbar bg="light" expand="md">
  <Container>
   <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { options1 }
      </Nav>
    </Navbar.Collapse>
    <Navbar.Brand href="#">
    React-Bootstrap
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: 'flex-end'}}>
      <Nav className="ml-auto">
        { options2 }
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
 
)

export default Header;
