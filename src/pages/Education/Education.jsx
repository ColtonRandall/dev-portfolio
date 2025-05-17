import "./Education.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer.jsx";

function Education() {
  return (
    <>
      <Navbar />
      <title>Education</title>
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
      <Footer />
    </>
  );
}

export default Education;
