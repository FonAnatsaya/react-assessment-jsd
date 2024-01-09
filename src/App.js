import "../src/pages/style.css";
import Admin from "./pages/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Owner from "./pages/Owner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/owner" element={<Owner />} />
      </Routes>
    </Router>
  );
}

export default App;
