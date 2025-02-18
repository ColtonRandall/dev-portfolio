import "./Certificates.css"; // Ensure your CSS is also imported
import { Link } from "react-router-dom";

function Certificates() {
  return (
    <div>
      <div className="nav">
        <Link to="/projects" id="projects">
          Personal Projects
        </Link>
        <Link to="/certificates" id="certs">
          Certifications
        </Link>
        <Link to="/" id="home">
          Home
        </Link>
      </div>

      <p id="mainTitle">Certifications</p>

      <hr />

      <p id="industryCertsTitle">Industry</p>
      <div className="industryCerts">
        <img
          src="/images/certificates/awsCP.png"
          id="awsCP"
          title="AWS Certified Cloud Practitioner"
        />
        <img
          src="./website_attachments/images/certificates/aws.png"
          id="aws"
          title="AWS Academy Graduate"
        />
      </div>

      <hr />

      <p id="UniCertsTitle">Postgraduate Studies</p>
      <div className="uniCerts">
        <img
          src="./website_attachments/images/certificates/718.png"
          id="javaPGcert"
          title="COMPSCI718 - Programming for Industry"
        />
        <img
          src="./website_attachments/images/certificates/719.png"
          id="webPGcert"
          title="COMPSCI719 - Programming for Web Technologies"
        />
      </div>

      <hr />

      <p id="OnlineCertsTitle">Online Courses</p>
      <div className="certImages">
        <img
          src="./website_attachments/images/certificates/udemyAWS.jpg"
          id="udemyAWS"
          title="Ultimate AWS Certified Cloud Practitioner - 2021 [Stephane Maarek]"
        />
        <img
          src="./website_attachments/images/certificates/java.png"
          id="java"
          title="Java - Codecademy"
        />
        <img
          src="./website_attachments/images/certificates/udemy.png"
          id="udemy"
          title="Practice Java by Building Projects - Udemy"
        />
        <img
          src="./website_attachments/images/certificates/coursera.png"
          id="coursera"
          title="Learning to Program in Python - Coursera"
        />
        <img
          src="./website_attachments/images/certificates/git.png"
          id="git"
          title="Git & GitHub - Udemy"
        />
        <img
          src="./website_attachments/images/certificates/js.png"
          id="js"
          title="JavaScript - SoloLearn"
        />
        <img
          src="./website_attachments/images/certificates/html.png"
          id="html"
          title="HTML Fundamentals - SoloLearn"
        />
        <img
          src="./website_attachments/images/certificates/python.png"
          id="py"
          title="Python 3 - SoloLearn"
        />
        <img
          src="./website_attachments/images/certificates/sql.png"
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
