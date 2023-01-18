// client/src/components/Search.js

import React from 'react';

import { Formik } from 'formik';
import { Button, Col, Form, Row } from 'react-bootstrap';

function IndividualSearch ({ search }) { // changed
    const onSubmit2 = async (values, actions) => {
        await search(

        );
      };
  
    return (
      <Formik
        initialValues={{
          query: '',
          genres: '',
          runtimeMinutes: ''
        }}
        onSubmit={onSubmit2}
      >
      {({
        handleChange,
        handleSubmit,
        values
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="country">
                <Form.Label>Individuals</Form.Label>
                <Col>
                    <Form.Control
                    type="text"
                    name="genres"
                    placeholder="Enter the age of the individual."
                    value={values.genres}
                    onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                    Filters search results by individuals.
                    </Form.Text>
                </Col>
                </Form.Group>
          <Form.Group as={Row}>
            <Col>
              <Button type='submit' variant='primary'>Search</Button>
            </Col>
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
}

export default IndividualSearch;