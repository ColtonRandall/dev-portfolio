import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
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
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-button active" : "nav-button"
        }
      >
        Home
      </NavLink>
    </nav>
  );
};

export default Navbar;
