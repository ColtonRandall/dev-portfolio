import { IconButton, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState, useEffect } from "react";

function ThemeToggle() {
  // Load from localStorage on initial render
  const [lightMode, setLightMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "light";
  });

  // Apply styles and save to localStorage whenever lightMode changes
  useEffect(() => {
    if (lightMode) {
      document.body.style.background = "#FDF6E3"; // Light mode
      document.body.style.color = "black";
      localStorage.setItem("theme", "light");
    } else {
      document.body.style.background = "var(--backgroundColour)"; // Dark mode
      document.body.style.color = "var(--textColour)";
      localStorage.setItem("theme", "dark");
    }
  }, [lightMode]);

  const toggleDarkAndLightMode = () => {
    setLightMode((prev) => !prev);
  };

  return (
    <IconButton
      className="themeButton"
      sx={{ marginLeft: 2 }}
      onClick={toggleDarkAndLightMode}
    >
      {!lightMode ? (
        <Tooltip title="Light Mode" placement="right">
          <LightModeIcon
            sx={{
              color: "white",
              zIndex: 10,
              fontSize: 28,
              "&:hover": {
                color: "gold",
              },
            }}
          />
        </Tooltip>
      ) : (
        <Tooltip title="Dark Mode" placement="right">
          <DarkModeIcon
            sx={{
              color: "black", // or use rgba(0, 0, 0, 0.87)
              zIndex: 10,
              fontSize: 28,
              "&:hover": {
                color: "#90c0df",
              },
            }}
          />
        </Tooltip>
      )}
    </IconButton>
  );
}

export default ThemeToggle;
