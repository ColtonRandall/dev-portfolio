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
              color: "gray",
              transition: "transform 0.5s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
                background: "#FDFD96",
                color: "black",
                borderRadius: 3,
              },
            }}
          />
        </a>
      </Tooltip>

      <Tooltip title="My GitHub profile" placement="bottom">
        <a href="https://github.com/ColtonRandall">
          <GitHubIcon
            sx={{
              color: "gray",
              fontSize: 55,
              transition: "transform 0.5s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
                background: "#FAF8F6",
                color: "black",
                padding: 0.05,
                borderRadius: 3,
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
              color: "gray",
              transition: "transform 0.5s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
                background: "#0072b1",
                color: "black",
                borderRadius: 3,
              },
            }}
          />
        </a>
      </Tooltip>

      <Tooltip title="Flick me an email" placement="bottom">
        <a href="mailto:coltonrandall.nz@gmail.com">
          <EmailIcon
            sx={{
              fontSize: 55,
              color: "gray",
              transition: "transform 0.5s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
                background: "#FF6961",
                color: "black",
                paddingRight: 0.25,
                paddingLeft: 0.25,
                borderRadius: 3,
              },
            }}
          />
        </a>
      </Tooltip>
    </div>
  );
}

export default Icons;
