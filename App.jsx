import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home/Home";
import Certificates from "./src/pages/Certificates/Certificates";
import Navbar from "./src/components/Navbar/Navbar"; // Ensure Navbar is imported

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </Router>
  );
}

export default App;
