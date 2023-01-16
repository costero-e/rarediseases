// client/src/App.js
import axios from 'axios';
import React, { useState, useEffect } from 'react'; // changed



import { Col, Container, Row } from 'react-bootstrap';

const apiEndpoint = 'http://localhost:5050/api/catalogs/'

function Catalog () {
  const [results, setResults] = useState([]);


  useEffect(() => {
    const apiCall = async () => {
        try {
            const res = await axios.get(
                apiEndpoint,
                { headers: {  } }
            )
            setResults(res.data);
            console.log(res.data);
        } catch (err) {
            console.log(err)
        }
    }
    apiCall()
}, []);


  return (
    <Container className='pt-3'>
      <h1>Catalog</h1>
      <p className='lead'>
        Use the controls below to use the catalog and filter the results.
      </p>
      <Row>
        <Col lg={8}>
          {results} {/* changed */}
        </Col>
      </Row>

    </Container>
  );
}

export default Catalog;