import "./Projects.css";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer.jsx";
import CoverImage from "../../components/CoverImage/CoverImage.jsx";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import PROJECTS from "../../data/projects.jsx";
import Grid from "@mui/material/Grid";
import { Box, Chip, Stack } from "@mui/material";

const FILTERS = ["All", "Java", "React", "C#", "JavaScript", "AI"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visible =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(activeFilter));

  return (
    <>
      <Navbar />
      <CoverImage title="Projects" />

      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        flexWrap="wrap"
        sx={{ mt: 4, mb: 2, px: 2, gap: 1 }}
      >
        {FILTERS.map((f) => (
          <Chip
            key={f}
            label={f}
            onClick={() => setActiveFilter(f)}
            variant={activeFilter === f ? "filled" : "outlined"}
            color={activeFilter === f ? "primary" : "default"}
            sx={{
              fontWeight: activeFilter === f ? 700 : 400,
              cursor: "pointer",
              fontSize: "0.9rem",
              transition: "all 0.2s",
            }}
          />
        ))}
      </Stack>

      <Box sx={{ minHeight: "8px", textAlign: "center", mb: 1, color: "text.secondary", fontSize: "0.85rem" }}>
        {visible.length} project{visible.length !== 1 ? "s" : ""}
      </Box>

      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        sx={{ marginTop: 4, px: { xs: 2, md: 6 } }}
      >
        {visible.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
        <Footer />
      </Grid>
    </>
  );
}

export default Projects;
