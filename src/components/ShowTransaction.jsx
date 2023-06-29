import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export default function ShowTransaction() {
  return (
    <Container className="mt-3">
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
