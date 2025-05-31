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

function CertCard({ image, title, description, dateAchieved, language, url }) {
  return (
    <Box
      sx={{
        borderRadius: 3,
        transition: "box-shadow 0.3s ease, transform 0.5s ease",
        "&:hover": {
          boxShadow: "0 0 0 8px tomato",
          transform: "scale(1.02)",
        },
      }}
    >
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: 3,
          boxShadow: 20,
        }}
      >
        <CardMedia
          component="img"
          sx={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          image={image}
        />
        <CardContent
          sx={{
            textAlign: "center",
            background: "#AEC6CF",
          }}
        >
          <Typography gutterBottom variant="h6">
            {title}
            <hr />
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <Typography
          variant="body2"
          fontWeight={"bold"}
          sx={{
            padding: 0.5,
            textAlign: "center",
            background: "#FF6961",
          }}
        >
          {language}
        </Typography>
        <CardActions
          sx={{
            background: "#ffdfba",
            justifyContent: "space-evenly",
          }}
        >
          <Tooltip title="Date achieved" placement="bottom" arrow>
            <Typography
              variant="body2"
              sx={{
                marginRight: 1,
                marginLeft: 1,
                padding: 0.5,
                borderRadius: 2,
                boxShadow: 1,
                background: "lightgray",
              }}
            >
              {dateAchieved}
            </Typography>
          </Tooltip>
          <Link to={url} target="_blank" rel="noopener noreferrer">
            <Tooltip title="View Course" placement="bottom" arrow>
              <IconButton
                sx={{
                  background: "lightgray",
                  padding: 1,
                  marginRight: 1,
                  boxShadow: 1,
                  "&:hover": {
                    background: "tomato",
                    boxShadow: 2,
                  },
                }}
              >
                <img src="./images/cert-icon.png" height={30} />
              </IconButton>
            </Tooltip>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}

export default CertCard;
