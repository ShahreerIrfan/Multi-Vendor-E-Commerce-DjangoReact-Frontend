/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Logo from '/logo.png';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Hero from './assets/Components/Hero/Hero';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
      <Hero></Hero>
    </>
  )
}

export default App


// 