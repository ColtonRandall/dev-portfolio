import "./Navbar.css";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Icons from "../Icons/Icons";

function Navbar() {
  return (
    <>
      <div className="top-bar">
        <ThemeToggle className="themeToggle" />
        <div className="top-bar-icons">
          <Icons />
        </div>
      </div>
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
          to="/blog"
          className={({ isActive }) =>
            isActive ? "nav-button active" : "nav-button"
          }
        >
          Blog
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
          to="/myjourney"
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
              "&:hover": {
                background: "tomato",
              },
            }}
          />
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
