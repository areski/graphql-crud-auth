import React from 'react';
import { Button, Table, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
// import { useSubscription, useApolloClient } from "@apollo/react-hooks";
import { QUERY_GET_CUSTOMER } from '../GraphQL';



function CustomerTable({ onDogSelected }) {
  const { loading, error, data } = useQuery(gql`${QUERY_GET_CUSTOMER}`);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (

    <Table striped bordered hover className="table-list">
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Country</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.customers.map(customer => (
          <tr>
            <td>{customer.id}</td>
            <td>{customer.fullname}</td>
            <td>{customer.email}</td>
            <td>{customer.country}</td>
            <td>
              <Link to={`/edit/${customer.id}/`}>
                <Button variant="warning">Edit</Button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table >
  );
}


function ListCustomer() {
  return (
    <Row className="justify-content-ld-center">
      <Col ld="auto">

        <InputGroup className="mb-4">
          <InputGroup.Prepend>
            <InputGroup.Text id="filter-fullname">
              Search:
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl id="basic-url" aria-describedby="filter-fullname" />
        </InputGroup>

        <CustomerTable />


      </Col>
    </Row>

  );
}


export default ListCustomer;