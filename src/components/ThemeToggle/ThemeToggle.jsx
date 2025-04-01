import { IconButton, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";

function ThemeToggle() {
  const [lightMode, setLightMode] = useState(false);

  const toggleDarkAndLightMode = () => {
    setLightMode((lightMode) => !lightMode);
  };

  // const subTitle = document.getElementsByClassName("subTitle");

  // toggle background and text colour based on dark/light mode button
  if (!lightMode) {
    document.body.style.background = "var(--backgroundColour)";
    document.body.style.color = "var(--textColour)";
  } else {
    document.body.style.background = "#F6E7D2";
    document.body.style.color = "black";
  }

  return (
    <IconButton
      className="themeButton"
      sx={{ marginLeft: 2 }}
      onClick={() => {
        toggleDarkAndLightMode();
      }}
    >
      {/* conditional rendering of light/dark */}
      {(!lightMode && (
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
      )) ||
        (lightMode && (
          <Tooltip title="Dark Mode" placement="right" sx={{ marginLeft: 3 }}>
            <DarkModeIcon
              sx={{
                color: "smoke",
                zIndex: 10,
                fontSize: 28,
                // paddingLeft: 3,
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
