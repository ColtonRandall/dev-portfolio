import { useState, useEffect } from "react";
import { Card, CardContent, CardActions, Typography, Chip, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

function stripMarkdown(text) {
  return text
    .replace(/^#{1,6}\s+.*/gm, "")         // headings
    .replace(/\*{1,2}(.+?)\*{1,2}/g, "$1") // bold and italic
    .replace(/\[(.+?)\]\(.+?\)/g, "$1")    // links → keep label
    .replace(/`(.+?)`/g, "$1")             // inline code
    .replace(/^\s*[-*+]\s+/gm, "")         // list markers
    .replace(/\n+/g, " ")                  // newlines -> spaces
    .trim();
}

function useExcerpt(file) {
  const [excerpt, setExcerpt] = useState("");

  useEffect(() => {
    fetch(file)
      .then((r) => r.text())
      .then((text) => setExcerpt(stripMarkdown(text).slice(0, 220) + "..."));
  }, [file]);

  return excerpt;
}

const cardStyles = (accentColor) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: 3,
  borderTop: `4px solid ${accentColor}`,
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  backgroundColor: "background.paper",
  transition: "transform 0.2s, box-shadow 0.2s",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
  },
});

const chipStyles = (accentColor) => ({
  backgroundColor: accentColor + "22",
  color: accentColor,
  fontWeight: 600,
  fontSize: "0.75rem",
});

const buttonStyles = (accentColor) => ({
  backgroundColor: accentColor,
  borderRadius: "20px",
  textTransform: "none",
  fontWeight: 600,
  px: 2.5,
  "&:hover": { backgroundColor: accentColor, filter: "brightness(0.88)" },
});

function BlogCard({ post }) {
  const excerpt = useExcerpt(post.file);

  return (
    <Card sx={cardStyles(post.accentColor)}>
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Stack direction="row" spacing={1} sx={{ mb: 1.5, flexWrap: "wrap", gap: 0.5 }}>
          {post.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" sx={chipStyles(post.accentColor)} />
          ))}
        </Stack>

        <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, lineHeight: 1.4, color: "text.primary" }}>
          {post.title}
        </Typography>

        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1.5 }}>
          {post.date}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
          {excerpt}
        </Typography>
      </CardContent>

      <CardActions sx={{ px: 3, pb: 2.5 }}>
        <Button component={Link} to={`/blog/${post.slug}`} variant="contained" size="small" sx={buttonStyles(post.accentColor)}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}

export default BlogCard;
