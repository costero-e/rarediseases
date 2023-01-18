// client/src/App.js
import axios from 'axios';
import React, { useState } from 'react'; // changed



import { Col, Container, Row } from 'react-bootstrap';
import IndividualSearch from './IndividualSearch';



function Individuals () {


  return (
    <Container className='pt-3'>
      <h1>Individuals</h1>
      <p className='lead'>
        Use the controls below to use the individuals and filter the results.
      </p>
      <Row>
      <Col lg={4}>
          <IndividualSearch/> {/* changed */}
        </Col>

      </Row>
    </Container>
  );
}

export default Individuals;