import { IconButton, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";

function ThemeToggle() {
  const [activeTheme, setActiveTheme] = useState(false);

  const toggleDarkAndLightMode = () => {
    setActiveTheme((activeTheme) => !activeTheme);
  };

  return (
    <IconButton
      className="themeButton"
      onClick={() => toggleDarkAndLightMode()}
    >
      {(!activeTheme && (
        <Tooltip title="Light Mode" placement="right">
          <LightModeIcon
            sx={{
              color: "white",
              zIndex: 10,
              fontSize: 24,
              marginLeft: 3,
              "&:hover": {
                color: "gold",
              },
            }}
            // onClick={() => }
          />
        </Tooltip>
      )) ||
        (activeTheme && (
          <Tooltip title="Dark Mode" placement="right">
            <DarkModeIcon
              sx={{
                color: "white",
                zIndex: 10,
                fontSize: 24,
                marginLeft: 3,
                "&:hover": {
                  color: "#90c0df",
                },
              }}
            />
          </Tooltip>
        ))}
    </IconButton>
  );
}

export default ThemeToggle;
