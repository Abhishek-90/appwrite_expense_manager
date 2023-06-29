import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function AddTransaction() {
  const [transactionData, setTransactionData] = useState({
    date: new Date().toISOString().split("T")[0],
    amount: "",
    type: "",
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      return;
    }
    // setValidated(true);
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Date</Form.Label>
          <Form.Control
            required
            type="date"
            value={transactionData.date}
            name="date"
            onChange={(e) =>
              setTransactionData({
                ...transactionData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Type</Form.Label>
          <Form.Select
            required
            value={transactionData.type}
            name="type"
            onChange={(e) =>
              setTransactionData({
                ...transactionData,
                [e.target.name]: e.target.value,
              })
            }
          >
            <option>Select Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustomUsername">
          <Form.Label>Description</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Description"
              aria-describedby="inputGroupPrepend"
              required
              value={transactionData.description}
              name="description"
              onChange={(e) =>
                setTransactionData({
                  ...transactionData,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom03">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="text"
            placeholder="Transaction Amount (in Rs)"
            required
            value={transactionData.amount}
            name="amount"
            onChange={(e) =>
              setTransactionData({
                ...transactionData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </Form.Group>
      </Row>
      <Button type="submit">Add Transaction</Button>
    </Form>
  );
}

export default AddTransaction;
