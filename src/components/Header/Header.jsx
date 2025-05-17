import "./Header.css";

function Header() {
  return (
    <div id="header">
      <div id="title">
        Colton
        <br />
        Randall
      </div>
      <img src="./images/me.jpeg" id="mainphoto" title="Me 🙂" />

      <div className="subTitle">
        <div id="SEtitle">Software Engineer</div>
        <br />
        with a background in Aviation and Biochemistry
      </div>
      <p id="location"> 📍 Auckland | New Zealand</p>
    </div>
  );
}

export default Header;
