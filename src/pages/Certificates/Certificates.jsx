import "./Certificates.css";
import Navbar from "../../components/Navbar/Navbar";
import UpArrow from "../../components/UpArrow/UpArrow";
import Footer from "../../components/Footer/Footer.jsx";
import CoverImage from "../../components/CoverImage/CoverImage.jsx";
import Grid from "@mui/material/Grid";
import CertCard from "./CertCard.jsx";

function Certificates() {
  return (
    <div>
      <Navbar />
      <CoverImage src={"./images/certificates-cover.jpg"} />

      <p id="industryCertsTitle">Industry Certifications</p>
      <div className="industryCerts">
        <img
          src="./images/awsCP.png"
          id="awsCP"
          title="AWS Certified Cloud Practitioner"
        />
        <img src="./images/aws.png" id="aws" title="AWS Academy Graduate" />
      </div>

      <hr />

      <p id="OnlineCertsTitle">Online Courses & Learning</p>

      <Grid
        container
        spacing={6}
        direction="row"
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ marginBottom: 15 }}
      >
        {/* Backend / Java */}
        <CertCard
          image={"./images/in-progress.png"}
          title={"Spring Boot – Chad Darby (In Progress)"}
          language={"Java • Spring Boot • Hibernate"}
          url={
            "https://www.udemy.com/course/spring-hibernate-tutorial/?couponCode=PMNVD2525"
          }
        />

        <CertCard
          image={"./images/java.png"}
          title={"Learn Java"}
          language={"Java • OOP • Syntax"}
          url={"https://www.codecademy.com/learn/learn-java"}
        />

        <CertCard
          image={"./images/udemy.png"}
          title={"Practice Java by Building Projects"}
          language={"Java • OOP • Projects"}
          url={
            "https://www.udemy.com/course/practice-java-by-building-projects/?couponCode=LEARNNOWPLANS"
          }
        />

        {/* Cloud / DevOps */}
        <CertCard
          image={"./images/udemyAWS.jpg"}
          title={"AWS Cloud Practitioner – Udemy"}
          language={"AWS • Cloud • IAM"}
          url={
            "https://www.udemy.com/course/aws-certified-cloud-practitioner-new/?couponCode=LEARNNOWPLANS"
          }
        />

        <CertCard
          image={"./images/git.png"}
          title={"Git & GitHub"}
          language={"Git • GitHub • Version Control"}
          url={
            "https://www.udemy.com/course/github-ultimate/?couponCode=LEARNNOWPLANS"
          }
        />

        {/* Python */}
        <CertCard
          image={"./images/python.png"}
          title={"Python Fundamentals"}
          language={"Python • Syntax • Logic"}
          url={"https://www.sololearn.com/en/learn/courses/python-introduction"}
        />

        <CertCard
          image={"./images/coursera.png"}
          title={"Programming Basics – Coursera"}
          language={"Python • Functions • Flow"}
          url={"https://www.coursera.org/learn/learn-to-program"}
        />

        {/* Databases */}
        <CertCard
          image={"./images/sql.png"}
          title={"SQL Fundamentals"}
          language={"SQL • Queries • Databases"}
          url={"https://www.sololearn.com/en/learn/courses/sql-introduction"}
        />

        {/* Frontend */}
        <CertCard
          image={"./images/js.png"}
          title={"JavaScript Basics"}
          language={"JavaScript • DOM"}
          url={
            "https://www.sololearn.com/en/learn/courses/javascript-introduction"
          }
        />

        <CertCard
          image={"./images/html.png"}
          title={"HTML Fundamentals"}
          language={"HTML • Tags • Layout"}
          url={"https://www.sololearn.com/en/learn/courses/html-introduction"}
        />
      </Grid>
      <UpArrow />
      <Footer />
    </div>
  );
}

export default Certificates;
