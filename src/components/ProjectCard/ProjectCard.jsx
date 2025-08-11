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
            width: { xs: 300, sm: 600 }, // smaller on mobile
            height: "100%",
            borderRadius: 3,
            boxShadow: 2,
            backgroundColor: "background.paper",
            color: "text.primary",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              objectFit: "contain",
              width: { xs: 300, sm: 600 },
              height: "100%",
              borderRadius: "12px 12px 0 0",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
            }}
          />

          <CardContent sx={{ px: 3, py: 2, flexGrow: 1 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1rem", sm: "1.5rem" }, // smaller on mobile
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              {description}
            </Typography>
          </CardContent>

          <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
            <Tooltip title="Date created" placement="bottom" arrow>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "10pt", sm: "12pt" },
                }}
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
                fontSize: { xs: "8pt", sm: "12pt" },
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
