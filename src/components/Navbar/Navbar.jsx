import "./Navbar.css";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

function Navbar() {
  return (
    <>
      <ThemeToggle />
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
          to="/certificates"
          className={({ isActive }) =>
            isActive ? "nav-button active" : "nav-button"
          }
        >
          Certifications
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
          to="/education"
          className={({ isActive }) =>
            isActive ? "nav-button active" : "nav-button"
          }
        >
          Education
        </NavLink>

        <NavLink
          to="/aboutme"
          className={({ isActive }) =>
            isActive ? "nav-button active" : "nav-button"
          }
        >
          My Journey
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "home-button active" : "home-button"
          }
        >
          <HomeRoundedIcon
            sx={{
              margin: "auto",
              fontSize: 30,
              color: "red", // allow it to get color from the NavLink wrapper
            }}
          />
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
