import "./BioButton.css";

function BioButton({ toggleAboutMe, isVisible }) {
  return (
    <div id="buttonDiv">
      <button type="button" onClick={toggleAboutMe}>
        {isVisible ? "Hide About Me" : "Show About Me"}
      </button>
    </div>
  );
}

export default BioButton;
