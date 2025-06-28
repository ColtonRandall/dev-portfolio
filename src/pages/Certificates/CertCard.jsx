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

function CertCard({ image, title, description, language, url }) {
  return (
    <Box
      sx={{
        borderRadius: 3,
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        "&:hover": {
          boxShadow: 6,
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
            objectFit: "cover",
            width: "100%",
            height: 250,
            border: "7px solid #000",
            borderRadius: "8px 8px 0 0",
            boxSizing: "border-box",
            display: "block",
            margin: "0 auto",
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
            <Tooltip title="View Course" placement="bottom" arrow>
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

export default CertCard;
