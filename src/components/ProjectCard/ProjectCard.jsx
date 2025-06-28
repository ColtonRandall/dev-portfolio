import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  IconButton,
  Tooltip,
  Box,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

function ProjectCard({
  image,
  title,
  description,
  dateCreated,
  language,
  url,
}) {
  return (
    <Box
      sx={{
        borderRadius: 3,
        transition: "box-shadow 0.3s, transform 0.3s",
        "&:hover": {
          boxShadow: "0 4px 24px 0 rgba(0, 0, 0, 0.15)",
          transform: "scale(1.01)",
        },
      }}
    >
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: 3,
          boxShadow: 2,
          background: "#fff",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            objectFit: "contain",
            width: "100%",
            height: 180,
            border: "6px solid #000", // Black border
            borderRadius: "8px 8px 0 0",
            boxSizing: "border-box", // Ensures border is inside the width
          }}
          image={image}
        />
        <CardContent
          sx={{
            textAlign: "center",
            background: "#f5faff",
            borderRadius: "0 0 8px 8px",
          }}
        >
          <Typography gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
          <Tooltip title="Date created" placement="bottom" arrow>
            <Typography variant="caption" color="text.secondary">
              {dateCreated}
            </Typography>
          </Tooltip>
          <Typography
            variant="caption"
            sx={{
              color: "#1976d2",
              background: "#e3f2fd",
              px: 1,
              borderRadius: 1,
              fontWeight: 500,
            }}
          >
            {language}
          </Typography>
          <Link to={url} target="_blank" rel="noopener noreferrer">
            <Tooltip title="View Repo" placement="bottom" arrow>
              <IconButton sx={{ color: "#1976d2" }}>
                <LaunchIcon />
              </IconButton>
            </Tooltip>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}

export default ProjectCard;
