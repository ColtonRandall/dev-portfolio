import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Certificates from "./pages/Certificates/Certificates";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import FizzBuzz from "./pages/FizzBuzz/FizzBuzz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/fizzbuzz" element={<FizzBuzz />}></Route>
    </Routes>
  );
}

export default App;
