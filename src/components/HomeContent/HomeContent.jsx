import "./HomeContent.css";
import { Box, Tooltip } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import LandscapeIcon from "@mui/icons-material/Landscape";
import { blue, green } from "@mui/material/colors";
import InfoCard from "./InfoCard";

function HomeContent() {
  return (
    <Box
      className="home-content"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 2, md: 3 },
        alignItems: "stretch",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "center",
        px: { xs: 0, md: 4 },
        boxSizing: "border-box",
        maxWidth: 1000,
      }}
    >
      <InfoCard
        icon={(props) => (
          <BuildIcon
            {...props}
            sx={{ ...props.sx, color: blue[700], fontSize: 52 }}
          />
        )}
        title="My Toolbox"
        subTitle="My core technical experience and skills."
        text={[
          "Java & Spring Boot",
          "C#/.NET, React, TypeScript",
          "AWS (CloudFormation, RDS, SQS), DevOps",
          "Docker, Kubernetes, microservices",
        ]}
        bgcolor="#bfdbfe"
      />
      <InfoCard
        icon={() => (
          <Tooltip title="Sinch" placement="top">
            <a
              href="https://www.sinch.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/sinch.jpg"
                alt="Sinch"
                className="currentRole-logo"
                style={{
                  width: 45,
                  height: 45,
                  objectFit: "contain",
                  borderRadius: 4,
                  border: "1px solid rgba(0,0,0,0.3)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                }}
              />
            </a>
          </Tooltip>
        )}
        title="Current Role"
        subTitle={"Software Engineer II @ Sinch"}
        text={[
          "Java 21+, Spring Boot, AWS",
          "CloudFormation, RDS, SQS",
          "Queue-driven architecture & system design",
          "DevOps & cloud-native development",
        ]}
        bgcolor="#FFF194"
      />
      <InfoCard
        icon={(props) => (
          <LandscapeIcon
            {...props}
            sx={{ ...props.sx, color: green[500], fontSize: 52, mb: 0 }}
          />
        )}
        title="Beyond Work"
        subTitle="What inspires me and keeps me balanced."
        text={[
          "Photography, travel, guitar, movies",
          "Love coffee and trying new food",
          "Exploring the outdoors with my wife and dog",
          "Building side projects",
        ]}
        bgcolor="#a7f3d0"
      />
    </Box>
  );
}

export default HomeContent;
