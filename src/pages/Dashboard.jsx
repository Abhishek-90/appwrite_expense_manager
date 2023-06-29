import { Container, Stack } from "react-bootstrap";
import AddTransaction from "../components/AddTransaction";
import ShowTransaction from "../components/ShowTransaction";
import PieChart from "../components/PieChart";

function Dashboard() {
  return (
    <Container className="mt-4">
      <Stack
        direction="horizontal"
        gap={5}
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <AddTransaction />
        <PieChart />
      </Stack>
      <ShowTransaction />
    </Container>
  );
}

export default Dashboard;
