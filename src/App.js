import "../src/pages/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Owner from "./pages/Owner";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/owner" element={<Owner />} />
      </Routes>
    </Router>
  );
}

export default App;
