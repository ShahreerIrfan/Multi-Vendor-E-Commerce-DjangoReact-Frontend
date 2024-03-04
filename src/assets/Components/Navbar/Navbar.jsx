import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaHome, FaUser, FaBriefcase, FaPhone } from 'react-icons/fa'; // Importing icons from React Icons
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar expand="lg" variant="dark" className="custom-navbar">
            <div className="container">
                <Navbar.Brand href="#" className="fw-bold">MyWebsite</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#" className="nav-link home">
                            <FaHome className="me-1" /> Home
                        </Nav.Link>
                        <Nav.Link href="#" className="nav-link about">
                            <FaUser className="me-1" /> About
                        </Nav.Link>
                        <Nav.Link href="#" className="nav-link services">
                            <FaBriefcase className="me-1" /> Services
                        </Nav.Link>
                        <Nav.Link href="#" className="nav-link contact">
                            <FaPhone className="me-1" /> Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default NavBar;
