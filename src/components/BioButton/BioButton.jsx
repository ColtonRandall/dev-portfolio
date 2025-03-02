import "./BioButton.css";
import { Box, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function BioButton({ toggleAboutMe, isVisible }) {
  return (
    <Box
      className="buttonDiv"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        className="aboutMeButton"
        variant="contained"
        size="large"
        color="success"
        type="button"
        startIcon={isVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
        onClick={toggleAboutMe}
      >
        {isVisible ? "Hide my sory" : "Show my story"}
      </Button>
    </Box>
  );
}

export default BioButton;
