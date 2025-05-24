import "./Header.css";

function Header() {
  return (
    <>
      <div id="header">
        <div className="title">
          Colton
          <br />
          Randall
        </div>
        <img src="./images/me-circle.png" id="mainphoto"/>

        <div className="subTitle">
          Software Engineer
        </div>
        <p id="location">Auckland, New Zealand</p>
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
