import { Container, Stack } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import UpdateModal from "./UpdateModal";

export default function ShowTransaction() {
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <Container className="mt-3">
      {showEditModal && <UpdateModal setShowEditModal={setShowEditModal} />}
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
            <td>
              <Stack direction="horizontal" gap={3}>
                <button
                  className="action-button"
                  onClick={() => setShowEditModal(true)}
                >
                  <FiEdit className="icon" />
                </button>
                <button className="action-button">
                  <AiOutlineDelete className="icon delete-icon" />
                </button>
              </Stack>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
