import "./Navbar.css";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import HomeIcon from "./HomeIcon";

function Navbar() {
  return (
    <div className="navBar">
      <ThemeToggle />
      <HomeIcon />
      <nav className="navbar">
        <NavLink
          to="/fizzbuzz"
          className={({ isActive }) =>
            isActive ? "nav-button active" : "nav-button"
          }
        >
          FizzBuzz
        </NavLink>
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
      </nav>
    </div>
  );
}

export default Navbar;
