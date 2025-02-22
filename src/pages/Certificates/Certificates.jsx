import Navbar from "../../components/Navbar/Navbar";
import "./Certificates.css";
import { Link } from "react-router-dom";

function Certificates() {
  return (
    <div>
      <title>Certificates</title>

      <p id="mainTitle">Certifications</p>

      <hr />

      <p id="industryCertsTitle">Industry</p>
      <div className="industryCerts">
        <img
          src="../public/images/awsCP.png"
          id="awsCP"
          title="AWS Certified Cloud Practitioner"
        />
        <img
          src="../public/images/aws.png"
          id="aws"
          title="AWS Academy Graduate"
        />
      </div>

      <hr />

      <p id="UniCertsTitle">Postgraduate Studies</p>
      <div className="uniCerts">
        <img
          src="../public/images/718.png"
          id="javaPGcert"
          title="COMPSCI718 - Programming for Industry"
        />
        <img
          src="../public/images/719.png"
          id="webPGcert"
          title="COMPSCI719 - Programming for Web Technologies"
        />
      </div>

      <hr />

      <p id="OnlineCertsTitle">Online Courses</p>
      <div className="certImages">
        <img
          src="../public/images/udemyAWS.jpg"
          id="udemyAWS"
          title="Ultimate AWS Certified Cloud Practitioner - 2021 [Stephane Maarek]"
        />
        <img
          src="../public/images/java.png"
          id="java"
          title="Java - Codecademy"
        />
        <img
          src="../public/images/udemy.png"
          id="udemy"
          title="Practice Java by Building Projects - Udemy"
        />
        <img
          src="../public/images/coursera.png"
          id="coursera"
          title="Learning to Program in Python - Coursera"
        />
        <img
          src="../public/images/git.png"
          id="git"
          title="Git & GitHub - Udemy"
        />
        <img
          src="../public/images/js.png"
          id="js"
          title="JavaScript - SoloLearn"
        />
        <img
          src="../public/images/html.png"
          id="html"
          title="HTML Fundamentals - SoloLearn"
        />
        <img
          src="../public/images/python.png"
          id="py"
          title="Python 3 - SoloLearn"
        />
        <img
          src="../public/images/sql.png"
          id="sql"
          title="SQL Fundamentals - SoloLearn"
        />
      </div>

      <div className="toTop">
        <a href="#">
          <img
            src="./website_attachments/images/up.png"
            id="arrow"
            title="Back to top!"
          />
        </a>
      </div>
    </div>
  );
}

export default Certificates;
