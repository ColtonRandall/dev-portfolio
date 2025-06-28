import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Certificates from "./pages/Certificates/Certificates";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import FizzBuzz from "./pages/FizzBuzz/FizzBuzz";
import Blog from "./pages/Blog/Blog";
import ColtonTimeline from "./pages/Timeline/ColtonTimeline";
import BlogPostPage from "./pages/Blog/BlogPostPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timeline" element={<ColtonTimeline />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/fizzbuzz" element={<FizzBuzz />}></Route>
      <Route path="/blog/:slug" element={<BlogPostPage />} />
    </Routes>
  );
}

export default App;
