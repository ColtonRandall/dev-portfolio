import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { Helmet } from "react-helmet";
import "./BlogPost.css";

const PREVIEW_CHAR_LIMIT = 400;

const BlogPost = ({ title, description, file, previewOnly, readMoreLink }) => {
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(file)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load post (${res.status})`);
        return res.text();
      })
      .then((text) => setContent(text))
      .catch((err) => setError(err.message));
  }, [file]);

  if (error) {
    return <Box className="blog-post-container"><p>Could not load post: {error}</p></Box>;
  }

  const hasMore = content.length > PREVIEW_CHAR_LIMIT;
  const canonicalUrl = `https://coltonrandall.com${window.location.pathname}`;

  if (previewOnly) {
    const previewText =
      content.slice(0, PREVIEW_CHAR_LIMIT) + (hasMore ? "..." : "");
    return (
      <Box className="blog-post-container">
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>

        <ReactMarkdown remarkPlugins={[remarkGfm]}>{previewText}</ReactMarkdown>
        {readMoreLink && hasMore && (
          <Box textAlign="right" mt={2}>
            <Link to={readMoreLink} className="read-more-link">
              <button className="read-more-btn">Read More</button>
            </Link>
          </Box>
        )}
      </Box>
    );
  }

  return (
    <Box className="blog-post-container">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </Box>
  );
};

export default BlogPost;
