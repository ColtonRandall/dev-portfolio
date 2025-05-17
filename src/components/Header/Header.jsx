import "./Header.css";

function Header() {
  return (
    <>
      <div id="header">
        <div id="title">
          Colton
          <br />
          Randall
        </div>
        <img src="./images/me.jpeg" id="mainphoto" title="Me 🙂" />

        <div className="subTitle">
          Software Engineer
        </div>
        <p id="location">Auckland, New Zealand</p>
      </div>
      <hr
        style={{
          marginTop: "4rem",
          marginBottom: 0,
          height: "2.5px",
          backgroundColor: "slategrey" /* or any color you like */,
          border: "none",
        }}
      />
    </>
  );
}

export default Header;
