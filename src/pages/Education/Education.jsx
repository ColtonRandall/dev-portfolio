import "./Education.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer.jsx";
import CoverImage from "../../components/CoverImage/CoverImage.jsx";
import { Tooltip } from "@mui/material";

function Education() {
  return (
    <>
      <Navbar />
      <CoverImage src={"./images/education-cover.jpg"} />

      <title>Education</title>

      <p id="UniCertsTitle">Postgraduate Studies</p>
      <div className="uniCerts">
        <Tooltip title="PgCert InfoTech" placement="bottom">
          <img src="./images/PGCertITCertificate2021.png" id="softwarePGcert" />
        </Tooltip>
      </div>
      <div className="uniCerts">
        <Tooltip title="COMPSCI718 - OOP in Java" placement="bottom">
          <img src="./images/718.png" id="javaPGcert"/>
        </Tooltip>
        <Tooltip title="COMPSCI719 - Web Development" placement="bottom">
          <img src="./images/719.png" id="webPGcert" />
        </Tooltip>
        <hr style={{ marginTop: "5rem" }} />
        <p id="UniCertsTitle">Undergraduate Studies</p>
        <div className="uniCerts">
          <Tooltip title="BSc Biochemistry" placement="bottom">
            <img
              src="./images/otagodegree.jpg"
              id="otagoDegree"
              style={{ marginTop: "2rem", scale: "1.5" }}
            />
          </Tooltip>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Education;
