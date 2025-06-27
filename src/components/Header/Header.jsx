import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Header.css";

function Header() {
  return (
    <>
      <div id="header">
        <div className="header-text">
          <div className="title">Colton Randall</div>
          <div className="subTitle">Software Engineer</div>
        </div>
        <img src="./images/me-circle.png" id="mainphoto" />
        <p id="location">
          <LocationOnIcon
            style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
          />
          Auckland, New Zealand
        </p>
      </div>
      <hr
        style={{
          marginTop: "3rem",
          height: "2.5px",
          backgroundColor: "slategrey",
          border: "none",
        }}
      />
    </>
  );
}

export default Header;
