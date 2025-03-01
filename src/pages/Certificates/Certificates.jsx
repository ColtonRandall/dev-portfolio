import Navbar from "../../components/Navbar/Navbar";
import "./Certificates.css";

function Certificates() {
  return (
    <div>
      <title>Certificates</title>

      <Navbar />

      <p id="mainTitle">Certificates</p>

      <hr />

      <p id="industryCertsTitle">Industry</p>
      <div className="industryCerts">
        <img
          src="/images/awsCP.png"
          id="awsCP"
          title="AWS Certified Cloud Practitioner"
        />
        <img src="/images/aws.png" id="aws" title="AWS Academy Graduate" />
      </div>

      <hr />

      <p id="OnlineCertsTitle">Online Courses</p>
      <div className="certImages">
        <img
          src="/images/udemyAWS.jpg"
          id="udemyAWS"
          title="Ultimate AWS Certified Cloud Practitioner - 2021 [Stephane Maarek]"
        />
        <img src="/images/java.png" id="java" title="Java - Codecademy" />
        <img
          src="../images/udemy.png"
          id="udemy"
          title="Practice Java by Building Projects - Udemy"
        />
        <img
          src="/images/coursera.png"
          id="coursera"
          title="Learning to Program in Python - Coursera"
        />
        <img src="../images/git.png" id="git" title="Git & GitHub - Udemy" />
        <img src="../images/js.png" id="js" title="JavaScript - SoloLearn" />
        <img
          src="/images/html.png"
          id="html"
          title="HTML Fundamentals - SoloLearn"
        />
        <img src="../images/python.png" id="py" title="Python 3 - SoloLearn" />
        <img
          src="/images/sql.png"
          id="sql"
          title="SQL Fundamentals - SoloLearn"
        />
      </div>

      <div className="toTop">
        <a href="#">
          <img src="../images/up.png" id="arrow" title="Back to top!" />
        </a>
      </div>
    </div>
  );
}

export default Certificates;
