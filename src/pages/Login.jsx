import { useState } from "react";
import { Container, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  return (
    <Container className="mt-4 flex justify-center">
      <Stack gap={4}>
        <h2 className="mx-auto">Appwrite | Expense Manager</h2>
        <Form>
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
        </Form>
      </Stack>
    </Container>
  );
}

export default Login;
