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

function BlogCard({ image, title, description, dateCreated, url }) {
  return (
    <Box
      sx={{
        borderRadius: 3,
        transition: "box-shadow 0.3s ease, transform 0.5s ease",
        "&:hover": {
          boxShadow: "0 0 0 8px tomato",
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
            height: "150px",
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
        <CardActions
          sx={{
            background: "#C1CBB3",
            justifyContent: "space-evenly",
          }}
        >
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
          <Link to={url} target="_blank" rel="noopener noreferrer">
            <Tooltip title="view full article" placement="right" arrow>
              <IconButton
                sx={{
                  background: "lightgray",
                  padding: 1,
                  marginRight: 1,
                  boxShadow: 1,
                  "&:hover": {
                    border: "tomato",
                    boxShadow: 2,
                  },
                }}
              >
                <img src="./images/medium.png" height={30} />
              </IconButton>
            </Tooltip>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}

export default BlogCard;
