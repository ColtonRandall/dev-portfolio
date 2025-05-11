import "./Navbar.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

function HomeIcon() {
  return (
    <HomeRoundedIcon
      sx={{
        color: "grey",
        position: "absolute",
        marginTop: 0.8,
        marginLeft: 2,
        zIndex: 100,
        fontSize: 29,
        "&:hover": {
          color: "#f25d3d",
        },
      }}
    />
  );
}

export default HomeIcon;
