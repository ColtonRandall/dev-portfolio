import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer.jsx";
import CoverImage from "../../components/CoverImage/CoverImage.jsx";
import { Box } from "@mui/material";
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
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <CoverImage title="Blog" />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          maxWidth: 700,
          width: "100%",
          mx: "auto",
          px: { xs: 2, md: 4 },
          mt: 11,
          mb: 6,
        }}
      >
        {POSTS.map((post) => (
          <Box key={post.slug} sx={{ width: "100%" }}>
            <BlogCard post={post} />
          </Box>
        ))}
      </Box>
      <Footer />
    </Box>
  );
}

export default Blog;
