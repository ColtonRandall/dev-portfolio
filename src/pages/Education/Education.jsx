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



      <p id="UniCertsTitle">Postgraduate Studies</p>
      <div className="uniCerts">
        <Tooltip title="Postgraduate Certificate in IT" placement="bottom">
          <img src="./images/PGCertITCertificate2021.png" id="softwarePGcert" alt="Postgraduate Certificate in IT" />
        </Tooltip>
      </div>
      <div className="uniCerts">
        <Tooltip
          title="Certificate of Outstanding Achievement (COMPSCI-718: OOP in Java)"
          placement="bottom"
        >
          <img src="./images/718.png" id="javaPGcert" alt="Certificate of Outstanding Achievement - OOP in Java" />
        </Tooltip>
        <Tooltip
          title="Certificate of Outstanding Achievement (COMPSCI-719: Web Development)"
          placement="bottom"
        >
          <img src="./images/719.png" id="webPGcert" alt="Certificate of Outstanding Achievement - Web Development" />
        </Tooltip>
        <hr style={{ marginTop: "5rem" }} />
        <p id="UniCertsTitle">Undergraduate Studies</p>
        <div className="uniCerts">
          <Tooltip title="BSc Biochemistry" placement="bottom">
            <img
              src="./images/otagodegree.jpg"
              id="otagoDegree"
              alt="BSc Biochemistry - University of Otago"
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
