import "./Navbar.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { NavLink } from "react-router-dom";

function HomeIcon() {
  return (
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? "nav-button active" : "nav-button"
      }
    >
      <HomeRoundedIcon
        sx={{
          marginTop: 1,
          marginLeft: 3,
          position: "fixed",
          zIndex: 10,
          fontSize: 28,
          "@media (max-width: 500px)": {
            marginLeft: 52,
          },
          "&:hover": {
            color: "gold",
          },
        }}
      />
    </NavLink>
  );
}

export default HomeIcon;
