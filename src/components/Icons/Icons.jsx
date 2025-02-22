import "./Icons.css";

function Icons() {
  return (
    <div className="icons">
      <a href="./documents/Colton CV 2025.pdf">
        <img src="./images/CV3.png" id="cvicon" title="View my CV!" />
      </a>

      <a href="https://github.com/ColtonRandall">
        <img
          src="./images/github4.png"
          id="github"
          title="See what I've been working on!"
        />
      </a>

      <a href="https://www.linkedin.com/in/coltonrandall/">
        <img
          src="./images/linkedin3.png"
          id="linkedin"
          title="Find me on LinkedIn!"
        />
      </a>

      <a href="mailto:coltonrandall.nz@gmail.com">
        <img src="./images/mail.png" id="gmail" title="Send me an email!" />
      </a>
    </div>
  );
}

export default Icons;
