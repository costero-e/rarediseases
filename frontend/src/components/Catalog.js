// client/src/App.js
import axios from 'axios';
import React, { useState, useEffect } from 'react'; // changed

import { Breadcrumb, Card } from 'react-bootstrap'; // new
import { Image } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import Search from './Search';
import Table from 'react-bootstrap/Table';


import { Col, Container, Row } from 'react-bootstrap';

const apiEndpoint = 'http://localhost:5050/api/catalogs/'

function Catalog ( ) {
  const [results, setResults] = useState([]);
  const [show, setShow] = useState (true)



    const apiCall = async () => {
        try {
            const res = await axios.get(
                apiEndpoint,
                { headers: {  } }
            )
            setResults(res.data.response.resultSets);
            

        } catch (err) {
            console.log(err)
        }
    }



const renderData = results.map((results) => {
  return results.results.map(results =>
    <div id="scroll"> 
    <Table responsive striped>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th class="urlcolumn">Url</th>
          <th>Created</th>
          <th>Updated</th>
          <th>Resource Types</th>
          <th>Organisation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{results.id}</td>
          <td>{results.name}</td>
          <td>{results.description}</td>
          <td><a href= {`${results.externalUrl}`}>{results.externalUrl} </a> </td>
          <td>{results.createDateTime}</td>
          <td>{results.updateDateTime}</td>
          <td>{results.resourceTypes}</td>
          <td>{results.organisation}</td>
        </tr>

      </tbody>
    </Table>
    </div>

  )});

  return (
    <Container className='pt-3'>
      <h1>Catalog</h1>
      {show && <p className='lead'>
      Click on the 'Show' button to show the rare diseases' catalog.
      </p>}
      <Row>
      <Col lg={4}>
          <Search apiCall={apiCall} show={show} setShow={setShow} /> {/* changed */}
        </Col>

      </Row>
      <Row>
      <Col lg={14} >
          {renderData} {/* changed */}
        </Col>
        </Row>
    </Container>
  );
}

export default Catalog;