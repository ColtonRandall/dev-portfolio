import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Certificates from "./pages/Certificates/Certificates";
import Projects from "./pages/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
