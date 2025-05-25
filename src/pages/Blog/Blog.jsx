import Navbar from "../../components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import Footer from "../../components/Footer/Footer.jsx";
import CoverImage from "../../components/CoverImage/CoverImage.jsx";
import BlogCard from "../../components/BlogCard.jsx";
import Box from "@mui/material/Box";

function Blog() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
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
        <BlogCard
          image={"./images/dora-blog.png"}
          title={
            "DORA metrics — What are they and how do they promote Engineering excellence?"
          }
          description={
            "This article aims to build my personal understandings of DORA, by summarising what they are, and how they’re implemented for success. I highlight how DORA metrics benefits the customer's experience, business analytics, and ultimately the engineers who build and develop on the product and it's features."
          }
          dateCreated={"11.07.2024"}
          url={
            "https://medium.com/@coltonrandall.nz/dora-metrics-what-are-they-and-how-do-they-promote-engineering-excellence-bfb501a42544"
          }
        />
      <Footer />
      </Grid>
    </Box>
  );
}

export default Blog;
