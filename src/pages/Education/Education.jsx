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
          <img
            src="./images/PGCertITCertificate2021.png
          "
            id="softwarePGcert"
          />
        </Tooltip>
        <Tooltip title="COMPSCI718 - OOP in Java" placement="bottom">
          <img src="./images/718.png" id="javaPGcert" />
        </Tooltip>
        <Tooltip title="COMPSCI719 - Web Development" placement="bottom">
          <img src="./images/719.png" id="webPGcert" />
        </Tooltip>
      </div>
      <Footer />
    </>
  );
}

export default Education;
