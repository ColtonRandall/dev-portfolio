import { useTheme } from "./ThemeProvider";
import { Sun, MoonStar } from "lucide-react";

function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      className={className}
      title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        position: "absolute",
        top: "11px",
        left: "24px",
        zIndex: 1000,
      }}
    >
      {isLight ? (
        <MoonStar size="35" color="#C3C2BE" fill="#C3C2BE" />
      ) : (
        <Sun size="37" color="#FDB813 " fill="#FDB813 " />
      )}
    </button>
  );
}

export default ThemeToggle;
