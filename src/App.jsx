import "./App.css";
import Login from "./pages/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
