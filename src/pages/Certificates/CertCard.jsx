import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Stack,
  Chip,
} from "@mui/material";
import { getChipColour } from "../../utils/chipColour";

function CertCard({ image, title, language, url }) {
  const tags = language ? language.split("•").map((t) => t.trim()) : [];

  return (
    <Card
      sx={{
        width: 400,
        borderRadius: 3,
        boxShadow: 3,
        "&:hover": { boxShadow: 6 },
        "@media (max-width:800px)": {
          width: 300,
        },
      }}
    >
      <CardActionArea href={url} target="_blank" rel="noopener noreferrer">
        <CardMedia
          component="img"
          height="270"
          image={image}
          alt={title}
          sx={{
            "@media (max-width:800px)": {
              height: 200,
            },
          }}
        />

        <CardContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              textAlign: "center",
              padding: 2,
              "@media (max-width:800px)": {
                fontSize: "1rem",
                padding: 1,
              },
            }}
          >
            {title}
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            mt={1}
            justifyContent={"center"}
          >
            {tags.map((tag, i) => (
              <Chip
                key={i}
                label={tag}
                size="medium"
                variant="filled"
                color={getChipColour(tag)}
                sx={{
                  fontSize: "0.75rem",
                  "@media (max-width:800px)": {
                    fontSize: "0.65rem",
                  },
                }}
              />
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CertCard;
