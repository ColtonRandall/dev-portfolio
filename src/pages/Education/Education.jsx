import Navbar from "../../components/Navbar/Navbar";
import "./Education.css";

function Education() {
  return (
    <>
      <Navbar />
      <p id="mainTitle">Education</p>

      <hr />

      <p id="UniCertsTitle">Postgraduate Studies</p>
      <div className="uniCerts">
        <img
          src="./images/718.png"
          id="javaPGcert"
          title="COMPSCI718 - Programming for Industry"
        />
        <img
          src="./images/719.png"
          id="webPGcert"
          title="COMPSCI719 - Programming for Web Technologies"
        />
      </div>
    </>
  );
}

export default Education;
