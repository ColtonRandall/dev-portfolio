import "./HomeContent.css";
import { Box } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import StarsIcon from "@mui/icons-material/Stars";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { orange } from "@mui/material/colors";
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
        icon={(props) => <BuildIcon color="primary" {...props} />}
        title="My Toolbox"
        subTitle="My core technical experience and skills."
        text={[
          "Full-stack experience - C#/.NET, React, TypeScript",
          "Java, Spring Boot",
          "DevOps, Docker, Kubernetes, Cloud (AWS)",
          "Microservices, REST APIs",
        ]}
        bgcolor="#b3d3ea"
      />
      <InfoCard
        icon={(props) => <StarsIcon sx={{ color: orange[700] }} {...props} />}
        title="Current Role"
        subTitle={"Backend Software Engineer at Westpac New Zealand"}
        text={[
          "Java 17, Spring Boot, Maven",
          "Docker, Kubernetes, Jenkins",
          "Backend modernisation, performance and reliability.",
          "System Design and Architecture.",        
        ]}
        bgcolor="#f7cfa2"
        iconColor={orange[700]}
      />
      <InfoCard
        icon={(props) => <WbSunnyIcon color="success" {...props} />}
        title="Beyond Work"
        subTitle="What inspires me and keeps me balanced."
        text={[
          "Photography, Travel, Guitar, Movies, Music.",
          "Being outdoors with my wife and dog.",
          "Enjoying the simple things.",
          "Constantly learning and growing.",
        ]}
        bgcolor="#b3ead3"
      />
    </Box>
  );
}

export default HomeContent;
