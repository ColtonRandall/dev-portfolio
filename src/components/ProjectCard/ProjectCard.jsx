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
            background: "lightblue",
          }}
        >
          {language}
        </Typography>
        <CardActions
          sx={{
            background: "#ffebcd",
            justifyContent: "space-evenly",
          }}
        >
          <Tooltip title="Date created" placement="bottom" arrow>
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
              {dateCreated}
            </Typography>
          </Tooltip>
          <Link to={url} target="_blank" rel="noopener noreferrer">
            <Tooltip title="view repo" placement="bottom" arrow>
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
                <img src="./images/octocat.png" height={30} />
              </IconButton>
            </Tooltip>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}

export default ProjectCard;
