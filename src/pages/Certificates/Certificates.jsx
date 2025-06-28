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

      <p id="industryCertsTitle">Industry</p>
      <div className="industryCerts">
        <img
          src="./images/awsCP.png"
          id="awsCP"
          title="AWS Certified Cloud Practitioner"
        />
        <img src="./images/aws.png" id="aws" title="AWS Academy Graduate" />
      </div>

      <hr />

      <p id="OnlineCertsTitle">Online Courses</p>

      <Grid
        container
        spacing={6}
        direction="row"
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          marginBottom: 15,
        }}
      >
        {/* Java udemy */}
        <CertCard
          image={"./images/java.png"}
          title={"Learn Java"}
          description={
            <>
              Learn to code in Java — a robust programming language used to
              create software, web and mobile apps, and more.
            </>
          }
          language={"Core programming & OOP concepts in Java"}
          url={"https://www.codecademy.com/learn/learn-java"}
        />

        {/* AWS udemy */}
        <CertCard
          image={"./images/udemyAWS.jpg"}
          title={"Ultimate AWS Certified Cloud Practitioner"}
          description={
            <>
              Course intended to prepare students for the AWS Cloud Practitioner
              certification.
            </>
          }
          language={"AWS services, Cloud computing concepts"}
          url={
            "https://www.udemy.com/course/aws-certified-cloud-practitioner-new/?couponCode=LEARNNOWPLANS"
          }
        />

        {/* Java projects udemy */}
        <CertCard
          image={"./images/udemy.png"}
          title={"Practice Java by Building Projects"}
          description={
            <>
              Ultimate Java course - 100% focused on applying object-oriented
              design in real-world applications.
            </>
          }
          language={"Java"}
          url={
            "https://www.udemy.com/course/practice-java-by-building-projects/?srsltid=AfmBOorpA1aLR6uXOnU6jV4Unq2dGqomSRhMjnzjuaz8b0vntRZw0sGX&couponCode=LEARNNOWPLANS"
          }
        />

        {/* Python sololearn */}
        <CertCard
          image={"./images/python.png"}
          title={"Python Course"}
          description={<>Master foundational concepts of coding with Python.</>}
          language={"Python 3"}
          url={"https://www.sololearn.com/en/learn/courses/python-introduction"}
        />

        {/* Python coursera */}
        <CertCard
          image={"./images/coursera.png"}
          title={"Learning to Program: The Fundamentals"}
          description={
            <>
              This course introduces the fundamental building blocks of
              programming and teaches you how to write fun and useful programs
              using the Python language.
            </>
          }
          language={"Python 3"}
          url={"https://www.coursera.org/learn/learn-to-program"}
        />

        {/* Git udemy */}
        <CertCard
          image={"./images/git.png"}
          title={"Git and GitHub"}
          description={
            <>
              Go from complete novice to expert in Git and GitHub using
              step-by-step, no-assumptions learning.
            </>
          }
          language={"Git, Github, Version control"}
          url={
            "https://www.udemy.com/course/github-ultimate/?srsltid=AfmBOoq48fKdDN7kKeK5dyvv5jYxJZQgRzkEgLsgdwXe6Ox_XJRU5Sm1&couponCode=LEARNNOWPLANS"
          }
        />

        {/* SQL Sololearn */}
        <CertCard
          image={"./images/sql.png"}
          title={"SQL Fundamentals"}
          description={
            <>
              Learn how to use the SQL standardized database language to access
              and manipulate data stored in databases.
            </>
          }
          language={"SQL, Databases"}
          url={"https://www.sololearn.com/en/learn/courses/sql-introduction"}
        />

        {/* JS sololearn */}
        <CertCard
          image={"./images/js.png"}
          title={"JavaScript"}
          description={
            <>
              By the end of this course you’ll know the basics of using
              JavaScript to make an interactive website.
            </>
          }
          language={"JavaScript"}
          url={
            "https://www.sololearn.com/en/learn/courses/javascript-introduction"
          }
        />

        {/* HTML Sololearn */}
        <CertCard
          image={"./images/html.png"}
          title={"HTML Fundamentals"}
          description={
            <>
              Learn the basic structure of using HTML to build a webpage and
              discover how you can help a web browser understand your content.
            </>
          }
          language={"HTML 5"}
          url={"https://www.sololearn.com/en/learn/courses/html-introduction"}
        />
      </Grid>
      <UpArrow />
      <Footer />
    </div>
  );
}

export default Certificates;
