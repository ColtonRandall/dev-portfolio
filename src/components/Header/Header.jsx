import "./Header.css";

function Header() {
  return (
    <div id="header">
      <h1 id="title">
        Colton
        <br />
        Randall
      </h1>
      <img src="./images/me.jpeg" id="mainphoto" title="Me 🙂" />

      <div id="subTitle">
        <div id="SEtitle">
          Software Engineer <blink>|</blink>
        </div>
        <br />
        with a background in Aviation and Biochemistry
      </div>
      <p id="location"> 📍 Auckland | New Zealand</p>
    </div>
  );
}

export default Header;
