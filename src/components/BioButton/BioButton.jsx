import "./BioButton.css";

function BioButton({ toggleAboutMe, isVisible }) {
  return (
    <div id="buttonDiv">
      <button className="aboutMeButton" type="button" onClick={toggleAboutMe}>
        {isVisible ? "Hide my story 🔐" : "Show my story 📖"}
      </button>
    </div>
  );
}

export default BioButton;
