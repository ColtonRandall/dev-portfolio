import "./Navbar.css";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import HomeIcon from "./HomeIcon";

function Navbar() {
  return (
    <>
      <ThemeToggle />
      <NavLink to="/">
        <HomeIcon
          className={({ isActive }) =>
            isActive ? "nav-button active" : "nav-button"
          }
          sx={{ zIndex: 100 }}
        />
      </NavLink>
      <nav>
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
    </>
  );
}

export default Navbar;
