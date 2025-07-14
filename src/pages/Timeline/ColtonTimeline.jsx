import Footer from "../../components/Footer/Footer";
import UpArrow from "../../components/UpArrow/UpArrow";
import Navbar from "../../components/Navbar/Navbar";
import CoverImage from "../../components/CoverImage/CoverImage";
import Timeline from "@mui/lab/Timeline";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import MapIcon from "@mui/icons-material/Map";
import TimelineComponent from "../../components/TimelineComponent";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import BiotechIcon from "@mui/icons-material/Biotech";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import ChildCareIcon from "@mui/icons-material/ChildCare";

function ColtonTimeline() {
  return (
    <>
      <Navbar />
      <CoverImage src={"./images/my-journey-cover.jpg"} />
      <Timeline
        className="timeline"
        position="alternate"
        sx={{ margin: "50px auto" }}
      >
        <TimelineComponent
          yearEntry="2025 (Apr) - Present ⭐️"
          iconColour="primary"
          iconComponent={<RocketLaunchIcon />}
          title="Software Engineer"
          description="Westpac New Zealand"
          logo="./images/westpac.png"
          subtext="Java 17, Spring Boot, Kubernetes, Docker"
        />

        <TimelineComponent
          yearEntry="2024 (Jul) - 2025 (Apr)"
          iconColour="primary"
          iconComponent={<TrendingUpIcon />}
          title="Full-Stack Software Engineer"
          description="Xero"
          logo="./images/xero.png"
          subtext="C# (.NET), React, TypeScript, AWS"
        />

        <TimelineComponent
          yearEntry="2023 (Feb) - 2024 (Jul)"
          iconColour="primary"
          iconComponent={<TrendingUpIcon />}
          title="Associate Software Engineer"
          description="Xero"
          logo="./images/xero.png"
          subtext="C# (.NET), React, TypeScript, AWS"
        />

        <TimelineComponent
          yearEntry="2022 (Feb) - 2023 (Feb)"
          iconColour="primary"
          iconComponent={<TrendingUpIcon />}
          title="Graduate Software Engineer"
          description="Xero"
          logo="./images/xero.png"
          subtext="C# (.NET), React, TypeScript, AWS"
        />

        <TimelineComponent
          yearEntry="2021 (Nov) - 2022 (Feb)"
          iconColour="primary"
          iconComponent={<RocketLaunchIcon />}
          title="Software Engineer Intern"
          description="Xero"
          logo="./images/xero.png"
          subtext="C#, AWS, Docker, Kubernetes"
        />

        <TimelineComponent
          yearEntry="2021 (Jul - Nov)"
          iconColour="primary"
          iconComponent={<SchoolIcon />}
          title="Master of IT"
          link="https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/master-of-information-technology-minfotech.html"
          description="Auckland University"
          logo="./images/aucklandUni.png"
          subtext={
            <>
              Partial completion before moving into industry
              <br />
              <u>Courses</u>
              <br />
              - Creating maintainable software (Java)
              <br />
              - AWS Cloud Computing (Cloud Practitioner certification)
              <br />- Health Informatics
            </>
          }
        />

        <TimelineComponent
          yearEntry="2021 (Feb - Jun)"
          iconColour="primary"
          iconComponent={<SchoolIcon />}
          title="Postgraduate Certificate in IT"
          link="https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/postgraduate-certificate-in-information-technology-pgcertinfotech.html"
          description="Auckland University"
          logo="./images/aucklandUni.png"
          subtext={
            <>
              - HTML, CSS, JavaScript, SQL, Node.js
              <br />- Java (OOP and Design Patterns)
            </>
          }
        />

        <TimelineComponent
          yearEntry="2020"
          iconColour="primary"
          iconComponent={<BiotechIcon />}
          title="Bioinformatics Research Assistant"
          description="Auckland University"
          logo="./images/aucklandUni.png"
        />

        <TimelineComponent
          yearEntry="2020"
          iconColour="primary"
          iconComponent={<ForkRightIcon />}
          title="Career Pivot"
          subtext="Aviation → Tech"
        />

        <TimelineComponent
          yearEntry="2020 (Mar - May)"
          iconColour="primary"
          iconComponent={<CoronavirusIcon />}
          title="COVID Lockdown"
          description="Continued learning to code"
          subtext="HTML, CSS, JavaScript"
        />

        <TimelineComponent
          yearEntry="2019"
          iconColour="primary"
          iconComponent={<CodeIcon />}
          title="Self-taught programming at home"
          subtext="Python"
        />

        <TimelineComponent
          yearEntry="2019"
          iconColour="primary"
          iconComponent={<AirplanemodeActiveIcon />}
          title="Began training as a pilot"
          description="Ardmore Flying School"
          logo="./images/ardmore.jpeg"
        />

        <TimelineComponent
          yearEntry="2018"
          iconColour="primary"
          iconComponent={<SchoolIcon />}
          title="Graduated - BSc Biochemistry"
          description="University of Otago"
          logo="./images/otago.png"
        />

        <TimelineComponent
          yearEntry="2016 (Jun - Jul)"
          iconColour="primary"
          iconComponent={<VolunteerActivismIcon />}
          title="Volunteering"
          subtext="🇰🇪 Nairobi, Kenya"
        />

        <TimelineComponent
          yearEntry="2015"
          iconColour="primary"
          iconComponent={<SchoolIcon />}
          title="First year of University"
          description="University of Otago"
          logo="./images/otago.png"
        />

        <TimelineComponent
          yearEntry="2013 - 2014"
          iconColour="primary"
          iconComponent={<MapIcon />}
          title="Travel & work abroad"
          subtext={
            <>
              🇵🇹 Portugal
              <br />
              🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland
              <br />
              🇨🇦 Canada
            </>
          }
        />

        <TimelineComponent
          yearEntry="2013 (Mar - May)"
          iconColour="primary"
          iconComponent={<VolunteerActivismIcon />}
          title="Volunteering"
          subtext="🇷🇼 Rwanda, Africa"
        />

        <TimelineComponent
          yearEntry="2012"
          iconColour="primary"
          iconComponent={<SchoolIcon />}
          title="Finished High School"
          description="Westlake Boys High School"
          logo="./images/westlake.jpeg"
        />

        <TimelineComponent
          yearEntry="1998"
          iconColour="primary"
          iconComponent={<FlightTakeoffIcon />}
          title="Family move overseas"
          subtext="🇨🇦 Canada to 🇳🇿 New Zealand"
        />

        <TimelineComponent
          yearEntry="Before 1998"
          iconColour="primary"
          iconComponent={<ChildCareIcon />}
          title="Early Days"
          subtext="Born in Canada"
        />
      </Timeline>
      <UpArrow />
      <Footer />
    </>
  );
}

export default ColtonTimeline;
