import LocationPinIcon from "@mui/icons-material/LocationPin";
import "./Header.css";
import Icons from "../Icons/Icons"; 

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
          <LocationPinIcon
            style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
          />
          Auckland, New Zealand
        </p>
        <div className="header-icons">
          <Icons />
        </div>
      </div>
    </>
  );
}

export default Header;
