// client/src/components/Search.js

import React from 'react';

import { Formik } from 'formik';
import { Button, Col, Form, Row } from 'react-bootstrap';


function Search ({ apiCall }) { // changed
    const onSubmit = async (values, actions) => {
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
              <Button type='submit' variant='primary'>Show</Button>
            </Col>
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
}

export default Search;