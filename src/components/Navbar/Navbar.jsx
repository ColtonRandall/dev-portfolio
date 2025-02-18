import { Link } from "react-router-dom"; // Import Link
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <Link to="/projects" id="projects">
        Personal Projects
      </Link>
      <Link to="/certificates" id="certs">
        Certifications
      </Link>
      <Link to="/" id="home">
        Home
      </Link>
    </div>
  );
}

export default Navbar;
