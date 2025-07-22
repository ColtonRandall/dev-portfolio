import "./HomeContent.css";
import { Box } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import StarsIcon from "@mui/icons-material/Stars";
import LandscapeIcon from "@mui/icons-material/Landscape";
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
          "Full-stack development: C#/.NET, React, TypeScript",
          "Java & Spring Boot",
          "Docker, Kubernetes, AWS (cloud-native DevOps)",
          "REST APIs & microservices",
        ]}
        bgcolor="#bfdbfe"
      />
      <InfoCard
        icon={(props) => <StarsIcon sx={{ color: orange[700] }} {...props} />}
        title="Current Role"
        subTitle={"Backend Software Engineer at Westpac New Zealand"}
        text={[
          "Java 17, Spring Boot, Maven",
          "Docker, Kubernetes, Jenkins",
          "Backend modernisation & performance optimisation",
          "System design & architecture",
        ]}
        bgcolor="#fcd6a0"
        iconColor={orange[700]}
      />
      <InfoCard
        icon={(props) => <LandscapeIcon color="success" {...props} />}
        title="Beyond Work"
        subTitle="What inspires me and keeps me balanced."
        text={[
          "Photography, travel, guitar, movies",
          "Love coffee and trying new food",
          "Exploring the outdoors with my wife and dog",
          "Always learning and growing",
        ]}
        bgcolor="#a7f3d0"
      />
    </Box>
  );
}

export default HomeContent;
