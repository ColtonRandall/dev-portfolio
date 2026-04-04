import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer.jsx";
import CoverImage from "../../components/CoverImage/CoverImage.jsx";
import { Grid, Box } from "@mui/material";
import BlogCard from "./BlogCard";

const POSTS = [
  {
    slug: "springBoot",
    title: "How Spring Boot can Accelerate Java Development",
    date: "June 22, 2025",
    file: "/posts/springBoot.md",
    tags: ["Java", "Spring Boot"],
    accentColor: "#1976d2",
  },
  {
    slug: "dora",
    title: "DORA Metrics: What are they and how do they promote Engineering excellence?",
    date: "July 11, 2024",
    file: "/posts/dora.md",
    tags: ["DevOps", "Engineering"],
    accentColor: "#388e3c",
  },
];

function Blog() {
  return (
    <Box>
      <Navbar />
      <CoverImage title="Blog" />
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: 1000, mx: "auto", px: { xs: 2, md: 4 }, mt: 5, mb: 6 }}
      >
        {POSTS.map((post) => (
          <Grid item xs={12} md={6} key={post.slug} sx={{ display: "flex" }}>
            <BlogCard post={post} />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Box>
  );
}

export default Blog;
