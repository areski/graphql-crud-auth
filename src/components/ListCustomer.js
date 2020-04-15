import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function ListCustomer() {
  return (
    <Row className="justify-content-ld-center">
      <Col ld="auto">
        <br />
        <h2>List Customers</h2>
        <br />
        <Table striped bordered hover className="table-list">
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Country</th>
              <th>Twitter</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark Otto</td>
              <td>USA</td>
              <td>@mdo</td>
              <td>
                <Link to="/edit/">
                  <Button variant="warning">Edit</Button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob Thornton</td>
              <td>UK</td>
              <td>@fat</td>
              <td>
                <Button variant="warning">Edit</Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry Bird</td>
              <td>Spain</td>
              <td>@twitter</td>
              <td>
                <Button variant="warning">Edit</Button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Jack Blog</td>
              <td>France</td>
              <td>@fat</td>
              <td>
                <Button variant="warning">Edit</Button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Jimmy Tortule</td>
              <td>Germany</td>
              <td>@twitter</td>
              <td>
                <Button variant="warning">Edit</Button>
              </td>
            </tr>
          </tbody>
        </Table>

      </Col>
    </Row>

  );
}

export default ListCustomer;