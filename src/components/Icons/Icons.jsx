import "./Icons.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import { Box, Tooltip } from "@mui/material";

function Icons() {
  return (
    <div className="icons">
      <Tooltip title="Check out my CV">
        <a href="./docs/Colton CV 2025.pdf">
          <Box
            sx={{
              display: "inline-block",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.2)",
                background: "gold",
                boxShadow: 7,
                borderRadius: 4,
              },
            }}
          >
            <DescriptionIcon
              className="cvicon"
              sx={{
                fontSize: 55,
                color: "black",
              }}
            />
          </Box>
        </a>
      </Tooltip>

      <Tooltip title="View my GitHub">
        <a href="https://github.com/ColtonRandall">
          <Box
            sx={{
              display: "inline-block",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.2)",
                background: "#FAF8F6",
                boxShadow: 7,
                borderRadius: 4,
              },
            }}
          >
            <GitHubIcon sx={{ color: "black", fontSize: 55 }} />
          </Box>
        </a>
      </Tooltip>

      <Tooltip title="Find me on LinkedIn">
        <a href="https://www.linkedin.com/in/coltonrandall/">
          <Box
            sx={{
              display: "inline-block",
              transition: "transform 0.5s ease-in-out",
              "&:hover": {
                transform: "scale(1.2)",
                background: "#0072b1",
                boxShadow: 7,
                borderRadius: 4,
              },
            }}
          >
            <LinkedInIcon
              sx={{
                paddingTop: "3px",
                fontSize: 60,
                color: "black",
              }}
            />
          </Box>
        </a>
      </Tooltip>

      <Tooltip title="Send me an Email">
        <a href="mailto:coltonrandall.nz@gmail.com">
          <Box
            sx={{
              display: "inline-block",
              transition: "transform 0.5s ease-in-out",
              "&:hover": {
                transform: "scale(1.2)",
                background: "#FF6961",
                boxShadow: 7,
                borderRadius: 4,
              },
            }}
          >
            <EmailIcon
              sx={{
                paddingTop: "2px",
                fontSize: 55,
                color: "black",
              }}
            />
          </Box>
        </a>
      </Tooltip>
    </div>
  );
}

export default Icons;
