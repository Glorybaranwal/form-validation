import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {LinkContainer} from 'react-router-bootstrap';
import login from './login'

const options1 = (
  <Fragment>
   {login ? (
    <Nav.Link href="/login">Login</Nav.Link>
    ):(
     <Nav.Link href="/register">Register</Nav.Link>
    )}
</Fragment>
)
const options2 = (
    <Fragment>
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      <Nav.Link href="#">Blog</Nav.Link>
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
