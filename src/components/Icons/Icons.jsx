import "./Icons.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import { Tooltip } from "@mui/material";

function Icons() {
  return (
    <div className="icons">
      <Tooltip title="My CV" placement="bottom">
        <a href="./docs/Colton CV 2025.pdf">
          <DescriptionIcon
            className="cvicon"
            sx={{
              fontSize: 55,
              color: "#92B4A7",
              borderRadius: 3,
              transition: "background 0.5s ease-in-out",
              "&:hover": {
                background: "#FDFD96",
                color: "black",
              },
            }}
          />
        </a>
      </Tooltip>

      <Tooltip title="My GitHub profile" placement="bottom">
        <a href="https://github.com/ColtonRandall">
          <GitHubIcon
            sx={{
              color: "#92B4A7",
              fontSize: 55,
              borderRadius: 3,
              transition: "background 0.5s ease-in-out",
              "&:hover": {
                background: "#FAF8F6",
                color: "black",
              },
            }}
          />
        </a>
      </Tooltip>

      <Tooltip title="My LinkedIn page" placement="bottom">
        <a href="https://www.linkedin.com/in/coltonrandall/">
          <LinkedInIcon
            sx={{
              fontSize: 60,
              color: "#92B4A7",
              borderRadius: 3,
              transition: "background 0.5s ease-in-out",
              "&:hover": {
                background: "#0072b1",
                color: "black",
              },
            }}
          />
        </a>
      </Tooltip>

      <Tooltip title="Flick me an email" placement="bottom">
        <a href="mailto:coltonrandall.nz@gmail.com">
          <EmailIcon
            sx={{
              fontSize: 60,
              color: "#92B4A7",
              borderRadius: 3,
              transition: "background 0.5s ease-in-out",
              "&:hover": {
                background: "#FF6961",
                color: "black",
              },
            }}
          />
        </a>
      </Tooltip>
    </div>
  );
}

export default Icons;
