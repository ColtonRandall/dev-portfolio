import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <a href="./projects.html">Personal Projects</a>
      <a href="./certificates.html">Certifications</a>
      <a href="./index.html" id="home">
        Home
      </a>
    </div>
  );
}

export default Navbar;