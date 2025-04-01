import "./Icons.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";

function Icons() {
  return (
    <div className="icons">
      <div title="Check out my CV">
        <a href="./docs/Colton CV 2025.pdf">
          <DescriptionIcon
            className="cvicon"
            sx={{
              fontSize: 55,
              color: "gray",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
                background: "gold",
                color: "black",
                borderRadius: 4,
              },
            }}
          />
        </a>
      </div>

      <div title="View my GitHub">
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
                borderRadius: 4,
              },
            }}
          />
        </a>
      </div>

      <div title="Find me on LinkedIn">
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
                borderRadius: 4,
              },
            }}
          />
        </a>
      </div>

      <div title="Send me an Email">
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
                borderRadius: 4,
              },
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default Icons;
