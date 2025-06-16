import { useParams, Link } from "react-router-dom";
import BlogPost from "./BlogPost";
import Box from "@mui/material/Box";
import Footer from "../../components/Footer/Footer";
import "./BlogPostPage.css";

const BlogPostPage = () => {
  const { slug } = useParams();
  // Dynamically resolve the markdown file path based on the slug
  const file = `/src/posts/${slug}.md`;
  return (
    <div className="blog-post-page-root">
      <Box mb={3} mt={2} ml={{ xs: 0, sm: 2 }}>
        <Link to="/blog" className="back-to-blogs-link">
          <button className="back-to-blogs-btn">← Back to Blogs</button>
        </Link>
      </Box>
      <div className="blog-post-page-content">
        <BlogPost file={file} />
      </div>
      <div className="blog-post-page-bottom-spacer" />
      <Footer />
    </div>
  );
};

export default BlogPostPage;
