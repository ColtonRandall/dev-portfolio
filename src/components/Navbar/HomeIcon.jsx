import "./Navbar.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

function HomeIcon() {
  return (
    <HomeRoundedIcon
      sx={{
        margin: "auto",
        zIndex: 100,
        fontSize: 30,
        "&:hover": {
          backgroundColor: "#f25d3d",
        },
      }}
    />
  );
}

export default HomeIcon;
