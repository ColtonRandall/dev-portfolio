import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Button,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

const cardStyles = (accentColor) => ({
  width: "100%",
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
  return (
    <Card sx={cardStyles(post.accentColor)}>
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Stack
          direction="row"
          spacing={1}
          sx={{ mb: 1.5, flexWrap: "wrap", gap: 0.5 }}
        >
          {post.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={chipStyles(post.accentColor)}
            />
          ))}
        </Stack>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 0.5,
            lineHeight: 1.4,
            color: "text.primary",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {post.title}
        </Typography>

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: "block" }}
        >
          {post.date}
        </Typography>
      </CardContent>

      <CardActions sx={{ px: 3, pb: 2.5 }}>
        <Button
          component={Link}
          to={`/blog/${post.slug}`}
          variant="contained"
          size="small"
          sx={buttonStyles(post.accentColor)}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}

export default BlogCard;
