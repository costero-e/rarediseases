// client/src/components/Search.js

import React, { useState } from 'react';

import { Formik } from 'formik';
import { Button, Col, Form, Row } from 'react-bootstrap';


function Search ({ apiCall, show, setShow }) {
    const onSubmit = async (values, actions) => {
        setShow (false)
        await apiCall(

        );
       
      };
  
    return (
      
      <Formik
        initialValues={{

        }}
        onSubmit={onSubmit}
      >
      {({
        handleSubmit,

      }) => (
        <Form noValidate onSubmit={handleSubmit}>

          <Form.Group as={Row}>
            <Col>
            {show &&  <Button className='thebestbutton' type='submit' variant='primary'>Show</Button>}
            </Col>
          </Form.Group>
        </Form>
      )}
    </Formik>

  );
}

export default Search;