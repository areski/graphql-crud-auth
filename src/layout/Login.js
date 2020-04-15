import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Login() {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check custom type="checkbox" label="Remember me" />
          </Form.Group>

          <Button variant="primary" className="btn btn-primary btn-block" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>

  );
}

export default Login;