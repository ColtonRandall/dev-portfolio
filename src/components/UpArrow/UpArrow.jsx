import "./UpArrow.css";
import Fab from "@mui/material/Fab";
import { Tooltip } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";

function UpArrow() {
  return (
    <div className="toTop">
      <a href="#">
        <Tooltip title="Back to top">
          <Fab className="upArrow" size="small">
            <NavigationIcon />
            {/* Back to top */}
          </Fab>
        </Tooltip>
      </a>
    </div>
  );
}

export default UpArrow;
