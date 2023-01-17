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
    <Routes>
    {/* changed */}
    <Route
        path='/'
        element={
          <Layout

          />
        }
      >

<Route path
='individuals' element={<Individuals />} 


/>
<Route path
='catalog' element={<Catalog />} />



        </Route>


       
        


  </Routes>
  );
}


function Layout () { // changed


  return (
    <>        <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">Rare Diseases</Navbar.Brand>
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
  <Card style={{width: "350px", border: "none"}}>
        <Card.Img variant="top" src="/ega.png" style={{width: "300px"}}/>
      </Card>
      </Container>
  <Container className='pt-3'>
      <Outlet />
      </Container>
      </>
  );
}

export default App;