import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Tooltip,
  Box,
  Stack,
  Chip,
} from "@mui/material";
import { getChipColour } from "../../utils/chipColour";

function ProjectCard({
  image,
  title,
  description,
  dateCreated,
  language,
  url,
}) {
  const tags = language ? language.split("·").map((t) => t.trim()) : [];

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
            width: { xs: 320, sm: 450 },
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
              width: { xs: 320, sm: 450 },
              height: 200,
              borderRadius: "12px 12px 0 0",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
            }}
          />

          <CardContent sx={{ px: 3, py: 2, flexGrow: 1 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 600,
                fontSize: { xs: "0.95rem", sm: "1.1rem" },
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: { xs: "0.8rem", sm: "0.875rem" },
              }}
            >
              {description}
            </Typography>
          </CardContent>

          <CardActions
            sx={{
              justifyContent: "space-between",
              px: 2,
              pb: 2,
              alignItems: "flex-end",
            }}
          >
            <Tooltip title="Date created" placement="bottom" arrow>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "10pt", sm: "12pt" },
                  whiteSpace: "nowrap",
                }}
              >
                {dateCreated}
              </Typography>
            </Tooltip>

            <Stack
              direction="row"
              spacing={0.5}
              flexWrap="wrap"
              justifyContent="flex-end"
              sx={{ gap: 0.5 }}
            >
              {tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  color={getChipColour(tag)}
                  sx={{ fontSize: { xs: "0.65rem", sm: "0.75rem" } }}
                />
              ))}
            </Stack>
          </CardActions>
        </Card>
      </Box>
    </Link>
  );
}

export default ProjectCard;
