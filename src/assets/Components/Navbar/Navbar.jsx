/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react'
import Logo from '/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className=" bg-success" >
        <div className='container'>
          <Navbar.Brand href="#"><img className='logo' src={Logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className='menu-items'>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" style={{color:'#fff'}}>Home</Nav.Link>
              <Nav.Link href="#action1" style={{color:'#fff'}}>Category</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
        </div>
    );
};

export default NavBar;