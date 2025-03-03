import "./Navbar.css";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Navbar() {
  return (
    <div className="navBar">
      <ThemeToggle />
      <nav className="navbar">
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "nav-button active" : "nav-button"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/certificates"
          className={({ isActive }) =>
            isActive ? "nav-button active" : "nav-button"
          }
        >
          Certifications
        </NavLink>
        <NavLink
          to="/education"
          className={({ isActive }) =>
            isActive ? "nav-button active" : "nav-button"
          }
        >
          Education
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-button active" : "nav-button"
          }
        >
          Home
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
