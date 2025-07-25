import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Tooltip,
  Box,
} from "@mui/material";

function ProjectCard({
  image,
  title,
  description,
  dateCreated,
  language,
  url,
}) {
  return (
    <Link
      to={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <Box
        sx={{
          borderRadius: 3,
          transition: "box-shadow 0.3s, transform 0.3s",
          "&:hover": {
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
            transform: "translateY(-4px)",
          },
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
            borderRadius: 3,
            boxShadow: 2,
            backgroundColor: "background.paper",
            color: "text.primary",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              objectFit: "cover",
              height: 180,
              width: "100%",
              borderRadius: "12px 12px 0 0",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
            }}
          />

          <CardContent sx={{ px: 3, py: 2, flexGrow: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>

          <CardActions sx={{ justifyContent: "space-between", px: 3, pb: 2 }}>
            <Tooltip title="Date created" placement="bottom" arrow>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontWeight: "bold" }}
              >
                {dateCreated}
              </Typography>
            </Tooltip>

            <Typography
              variant="caption"
              sx={{
                backgroundColor: "#e3f2fd",
                color: "#1976d2",
                px: 1.5,
                py: 0.5,
                borderRadius: "6px",
                fontSize: "0.75rem",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              {language}
            </Typography>
          </CardActions>
        </Card>
      </Box>
    </Link>
  );
}

export default ProjectCard;
