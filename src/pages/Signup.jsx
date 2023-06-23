import { useState } from "react";
import { Container, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// TODO: Itegrate App Write to add new user's data in database and finish signup
// TODO: Add Google Authentication signup using app write

function Signup() {
  const [signupCredentials, setSignupCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <Container className="mt-4">
      <Stack gap={4}>
        <h2 className="mx-auto">Appwrite | Expense Manager</h2>
        <Form className="mt-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter name"
              onChange={(e) =>
                setSignupCredentials({
                  ...signupCredentials,
                  [e.target.name]: e.target.value,
                })
              }
              value={signupCredentials.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={(e) =>
                setSignupCredentials({
                  ...signupCredentials,
                  [e.target.name]: e.target.value,
                })
              }
              value={signupCredentials.email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setSignupCredentials({
                  ...signupCredentials,
                  [e.target.name]: e.target.value,
                })
              }
              value={signupCredentials.password}
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

export default Signup;
