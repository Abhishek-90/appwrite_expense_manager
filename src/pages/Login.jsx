import { useState } from "react";
import { Container, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";

// TODO: Itegrate App Write to add new user's data in database and finish signin
// TODO: Add Google Authentication signin using app write

function Login() {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  return (
    <Container className="mt-4">
      <Stack gap={4}>
        <h2 className="mx-auto">Appwrite | Expense Manager</h2>
        <Form className="mt-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              value={loginCredentials.email}
              onChange={(e) =>
                setLoginCredentials({
                  ...loginCredentials,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={loginCredentials.password}
              onChange={(e) =>
                setLoginCredentials({
                  ...loginCredentials,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <NavLink to="/signup">
            <Button className="mx-3" variant="outline-primary" type="button">
              Sign up
            </Button>
          </NavLink>
        </Form>
      </Stack>
    </Container>
  );
}

export default Login;
