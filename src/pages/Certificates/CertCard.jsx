import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Stack,
  Chip,
} from "@mui/material";

// Simple function to decide chip color based on keywords
function getChipColor(tag) {
  const lower = tag.toLowerCase();

  if (
    lower.includes("java") ||
    lower.includes("spring") ||
    lower.includes("hibernate")
  ) {
    return "primary"; // Blue = Java
  }

  if (lower.includes("python")) {
    return "secondary"; // Purple = Python
  }

  if (
    lower.includes("html") ||
    lower.includes("css") ||
    lower.includes("javascript") ||
    lower.includes("dom")
  ) {
    return "warning"; // Orange = frontend
  }

  if (
    lower.includes("aws") ||
    lower.includes("cloud") ||
    lower.includes("iam")
  ) {
    return "success"; // Green = cloud
  }

  if (
    lower.includes("git") ||
    lower.includes("github") ||
    lower.includes("version")
  ) {
    return "info"; // Light blue = dev tools
  }

  if (
    lower.includes("sql") ||
    lower.includes("database") ||
    lower.includes("queries")
  ) {
    return "error"; // Red = databases
  }

  return "default"; // Default grey if no match
}

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
                color={getChipColor(tag)}
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
