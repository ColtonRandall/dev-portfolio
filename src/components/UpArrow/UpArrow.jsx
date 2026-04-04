import "./UpArrow.css";
import Fab from "@mui/material/Fab";
import { Tooltip } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";

function UpArrow() {
  return (
    <div className="toTop">
      <Tooltip title="Back to top">
        <Fab className="upArrow" size="small" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <NavigationIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}

export default UpArrow;
