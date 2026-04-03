import Typography from "@mui/material/Typography";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Tooltip, Chip, Box } from "@mui/material";

function TimelineComponent({
  yearEntry,
  iconColour = "primary",
  iconComponent,
  title,
  link,
  description,
  logo,
  subtext,
  techStack,
}) {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body1"
        color="tomato"
        fontWeight="bold"
      >
        {yearEntry}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color={iconColour}>{iconComponent}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "30px", px: 2 }}>
        {link ? (
          <Tooltip title="Click to view the course" placement="top">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Typography variant="h6" component="span" color="info">
                {title}
              </Typography>
            </a>
          </Tooltip>
        ) : (
          <Typography
            variant="h6"
            component="span"
            sx={{ textDecoration: "underline" }}
          >
            {title}
          </Typography>
        )}
        <Typography fontWeight="bold" sx={{ mt: 0.5 }}>
          {logo ? (
            <img
              src={logo}
              style={{
                width: "30px",
                marginRight: "8px",
                borderRadius: "5px",
                verticalAlign: "middle",
              }}
            />
          ) : null}
          {description}
        </Typography>
        {subtext ? (
          <Typography variant="subtitle2" component="span">
            {subtext}
          </Typography>
        ) : null}
        {techStack ? (
          <Box sx={{ mt: 1 }}>
            {techStack.map((tech) => (
              <Chip key={tech} label={tech} size="small" variant="outlined" sx={{ m: 0.25 }} />
            ))}
          </Box>
        ) : null}
      </TimelineContent>
    </TimelineItem>
  );
}

export default TimelineComponent;
