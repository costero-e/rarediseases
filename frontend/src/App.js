import React from 'react';
import {
  Col, Button, Container, Form, Navbar, Row
} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Individuals from './components/Individuals';
import Catalog from './components/Catalog';
import { Outlet, Route, Routes, NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';



function App () {
  return (
    <>
  <Layout/>
    <Routes>
    {/* changed */}
    <Route
        path='/'
        element={ <Catalog/> }
        
      />


<Route path
='catalog' element={<Catalog />} />

<Route path
='individuals' element={<Individuals />} 


/>





       
        


  </Routes>
  </>
  );
}


function Layout () { // changed


  return (
    <>        <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="https://vp.ejprarediseases.org/"><img style={{height: "48px"}} src="/rarediseases.png" alt="RareDiseases"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="catalog">Catalog</Nav.Link>
          <Nav.Link href="individuals">Individuals</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Container className='pt-3'>
        <a  href="https://ega-archive.org/">
        <Card.Img variant="top" src="/ega.png" style={{width: "230px", position: "relative", left: "40%", padding: "10px"}}/>
      </a>
      </Container>

      </>
  );
}

export default App;