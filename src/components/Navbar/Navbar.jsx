import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery, IconButton, Menu, MenuItem, Box } from "@mui/material";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width:1000px)");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const navLinks = [
    { to: "/fizzbuzz", label: "FizzBuzz" },
    { to: "/timeline", label: "Timeline" },
    { to: "/education", label: "Education" },
    { to: "/certificates", label: "Certificates" },
    { to: "/blog", label: "Blog" },
    { to: "/projects", label: "Projects" },
  ];

  return (
    <>
      <div className="top-bar">
        <ThemeToggle className="themeToggle" />
      </div>
      {isMobile ? (
        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 0,
            zIndex: 20,
            background: "transparent",
            boxShadow: "none",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            aria-label="menu"
            onClick={(e) => {
              menuOpen ? handleMenuClose() : handleMenuOpen(e);
            }}
            sx={{
              color: "rgb(152, 204, 179)",
              marginRight: "1rem",
            }}
          >
            {!menuOpen ? (
              <MenuIcon fontSize="large" />
            ) : (
              <CloseIcon fontSize="large" />
            )}
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            PaperProps={{
              sx: {
                background: "var(--navColour)",
                boxShadow: "var(--shadow)",
                borderRadius: 3,
                minWidth: 180,
              },
            }}
          >
            <MenuItem
              onClick={handleMenuClose}
              component={NavLink}
              to="/"
              sx={{
                justifyContent: "center",
                borderRadius: 3,
                color: "rgb(152, 204, 179)",
                "&.active": {
                  background: "#c2c5c7",
                  color: "black",
                },
                "&:hover": {
                  background: "tomato",
                  color: "white",
                },
              }}
            >
              <HomeRoundedIcon sx={{ fontSize: 23 }} />
            </MenuItem>
            {navLinks
              .slice()
              .reverse()
              .map((link) => (
                <MenuItem
                  key={link.to}
                  onClick={handleMenuClose}
                  component={NavLink}
                  to={link.to}
                  sx={{
                    justifyContent: "center",
                    borderRadius: 2,
                    fontSize: "20px",
                    color: "rgb(152, 204, 179)",
                    marginTop: 1,
                    "&.active": {
                      background: "#c2c5c7",
                      color: "black",
                    },
                    "&:hover": {
                      background: "tomato",
                      color: "white",
                    },
                  }}
                >
                  {link.label}
                </MenuItem>
              ))}
          </Menu>
        </Box>
      ) : (
        <nav className="nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "nav-button active" : "nav-button"
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "home-button active" : "home-button"
            }
          >
            <HomeRoundedIcon
              sx={{
                margin: "auto",
                fontSize: 27,
                "&.active": {
                  background: "#c2c5c7",
                  color: "black",
                },
                "&:hover": {
                  background: "tomato",
                  color: "white",
                },
              }}
            />
          </NavLink>
        </nav>
      )}
    </>
  );
}

export default Navbar;
