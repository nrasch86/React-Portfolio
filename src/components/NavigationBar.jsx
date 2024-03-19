// NavigationBar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Nikki Rasch</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={NavLink} to="/resume">Resume</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
