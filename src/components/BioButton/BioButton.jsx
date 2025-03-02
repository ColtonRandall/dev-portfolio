import { Box, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function BioButton({ toggleAboutMe, isVisible }) {
  return (
    <Box
      className="aboutMeButton"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "@media(max-width: 900px)": {
          marginTop: 10,
        },
      }}
    >
      <Button
        variant="contained"
        size="large"
        color="success"
        type="button"
        startIcon={isVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
        onClick={toggleAboutMe}
        sx={{
          marginBottom: 5,
        }}
      >
        {isVisible ? "Hide my sory" : "Show my story"}
      </Button>
    </Box>
  );
}

export default BioButton;
