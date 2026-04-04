import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Certificates from "./pages/Certificates/Certificates";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import FizzBuzz from "./pages/FizzBuzz/FizzBuzz";
import Blog from "./pages/Blog/Blog";
import ColtonTimeline from "./pages/Timeline/ColtonTimeline";
import BlogPostPage from "./pages/Blog/BlogPostPage";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-fade">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<ColtonTimeline />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/fizzbuzz" element={<FizzBuzz />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return <AnimatedRoutes />;
}

export default App;
