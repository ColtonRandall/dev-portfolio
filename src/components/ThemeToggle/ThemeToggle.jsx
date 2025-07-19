import { IconButton, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState, useEffect } from "react";

function ThemeToggle({ className }) {
  const [lightMode, setLightMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "light";
  });

  useEffect(() => {
    if (lightMode) {
      document.body.style.background = "#F0F0EB"; // Light mode
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
      className={className}
      sx={{
        zIndex: 1000,
        position: "absolute",
        top: 15,
        left: 35,
      }}
      onClick={toggleDarkAndLightMode}
    >
      {!lightMode ? (
        <Tooltip title="Light Mode" placement="bottom">
          <LightModeIcon
            sx={{
              color: "white",
              marginTop: 2,
              position: "absolute",
              zIndex: 1000,
              fontSize: 35,
              "&:hover": {
                color: "gold",
              },
            }}
          />
        </Tooltip>
      ) : (
        <Tooltip title="Dark Mode" placement="bottom">
          <DarkModeIcon
            sx={{
              color: "#D3D3D3",
              position: "absolute",
              zIndex: 1000,
              marginTop: 2,
              fontSize: 35,
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
