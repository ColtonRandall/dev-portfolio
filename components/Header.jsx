import "./Header.css";

function Header() {
  return (
    <div id="header">
      <p id="title">
        Colton <br />
        Randall
      </p>
      <img src="./images/me.jpeg" id="mainphoto" title="Me 🙂" />

      <div id="subTitle">
        <div id="SEtitle">
          Software Engineer <blink>|</blink>
        </div>
        <br />
        with a background in Aviation and Biochemistry
      </div>
      <p id="location">
        &#x1F30F; <br />
        Auckland | New Zealand
      </p>
    </div>
  );
}

export default Header;
