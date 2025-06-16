import Navbar from "../../components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import Footer from "../../components/Footer/Footer.jsx";
import CoverImage from "../../components/CoverImage/CoverImage.jsx";
import BlogPost from "./BlogPost";
import Box from "@mui/material/Box";

function Blog() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <CoverImage src={"./images/blog-cover.jpg"} />
      <Grid
        container
        spacing={6}
        direction="row"
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          marginTop: 10,
        }}
      >
        <Grid item xs={12} md={8}>
          <BlogPost
            file={"/src/posts/dora.md"}
            previewOnly
            readMoreLink="/blog/dora"
          />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}

export default Blog;
