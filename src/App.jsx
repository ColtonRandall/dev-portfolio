import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Certificates from "./pages/Certificates/Certificates";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import FizzBuzz from "./pages/FizzBuzz/FizzBuzz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/fizzbuzz" element={<FizzBuzz />}></Route>
    </Routes>
  );
}

export default App;
