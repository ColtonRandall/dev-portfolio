import "./Icons.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import { Tooltip } from "@mui/material";
import PropTypes from "prop-types";

function Icons({ size = 27, iconColor = "#6A9F85" }) {
  return (
    <div className="icons">
      <Tooltip title="My CV" placement="bottom">
        <a href="./docs/Colton CV 2025.pdf">
          <DescriptionIcon
            className="icon cvicon"
            style={{ fontSize: size, color: iconColor }}
          />
        </a>
      </Tooltip>

      <Tooltip title="My GitHub profile" placement="bottom">
        <a href="https://github.com/ColtonRandall">
          <GitHubIcon
            className="icon githubicon"
            style={{ fontSize: size, color: iconColor }}
          />
        </a>
      </Tooltip>

      <Tooltip title="My LinkedIn page" placement="bottom">
        <a href="https://www.linkedin.com/in/coltonrandall/">
          <LinkedInIcon
            className="icon linkedinicon"
            style={{ fontSize: size + 2, color: iconColor }}
          />
        </a>
      </Tooltip>

      <Tooltip title="Flick me an email" placement="bottom">
        <a href="mailto:coltonrandall.nz@gmail.com">
          <EmailIcon
            className="icon emailicon"
            style={{ fontSize: size + 2, color: iconColor }}
          />
        </a>
      </Tooltip>
    </div>
  );
}

Icons.propTypes = {
  size: PropTypes.number,
};

export default Icons;
