import { useState, useRef } from "react";
import BioButton from "../../components/BioButton/BioButton";
import "./AboutMe.css";

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutMeRef = useRef(null);

  const toggleAboutMe = () => {
    setIsVisible((prev) => {
      const newVisibility = !prev;

      if (newVisibility) {
        setTimeout(() => {
          if (aboutMeRef.current) {
            aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }, 200);
      }

      return newVisibility;
    });
  };

  return (
    <>
      <BioButton toggleAboutMe={toggleAboutMe} isVisible={isVisible} />

      {isVisible && (
        <div
          ref={aboutMeRef}
          id="ABOUTME"
          className={isVisible ? "visible" : ""}
        >
          <div className="aboutMeContent">
            <div className="coleNanook">
              <div id="imgTag">
                <img
                  src="/images/coleNanook.jpg"
                  id="coleNanookIMG"
                  title="1999: My first playstation and first puppy, what a life!"
                />
              </div>

              <p id="coleNanookContent">
                Hi! 👋
                <br />
                <br />
                I'm Colton, the proud dual citizen of two of the most beautiful
                countries in the world, Canada - my birthplace, and New Zealand
                - where I grew up.
              </p>
            </div>

            <div className="Rwanda1Div">
              <p id="Rwanda1Content">
                Fast forward to 2013. I had just finished high-school and felt
                the need to explore the world. I wanted to do something unique,
                only for the opportunity to volunteer in Rwanda presented
                itself.
              </p>
              <img
                src="/images/rwanda1.jpg"
                id="rwanda1IMG"
                title="2013: Volunteering at a Rwandan pre-school"
              />
            </div>

            {/* <!-- RWANDA2  --> */}
            <div className="Rwanda2Div">
              <img
                src="/images/rwanda2.jpg"
                id="rwanda2IMG"
                title="Me and my good friend Kristen!"
              />

              <p id="Rwanda2Content">
                In Rwanda, I taught English at a local orphanage and a nearby
                preschool, needless to say, it was an enriching, but eye-opening
                experience. It changed me in more ways than I ever imagined. I
                of course, then had the urge to go back to Africa three years
                later for more volunteer work, this time to Kenya, I taught
                Maths and Physics at a high school in Kibera - the largest slum
                in Africa. I also worked as a healthcare assistant deeper in the
                slum to help local doctors treat the residents for Malaria and
                various respiratory infections.
              </p>
            </div>

            <div id="extraPhotos">
              <img
                src="/images/kenya.jpg"
                title="2016, Kenya: The pre-school in Kibera slum I volunteered at"
                id="kenya"
              />
              <img
                src="./images/elephant.jpg"
                title="My adopted baby elephant 'Ngilai' from David Sheldrick Wildlife Trust"
                id="elephant"
              />
            </div>

            {/* <!-- OTAGO --> */}
            <div className="OtagoDiv">
              <p id="otagoContent1">
                After my experiences in Africa, I developed an interest in
                Healthcare and emerging Biotechnology, which led me to major in
                Biochemistry in Dunedin, New Zealand.
                <br />
                <br />
                During my degree, Genetic Engineering and Bioinformatics played
                a big part in the course content, along with the treatment of
                cancer. We breifly played around with R and Python scripting,
                which was my first introduction to programming, which I took an
                interest in. The only complicating factor? At the end of my
                degree, I had an opportunity to do an intro flight at a local
                flight club, where I found a passion for Aviation...
              </p>
            </div>

            <div id="otagoImages">
              <img src="/images/otago.jpg" id="otagoIMG" />
              <img
                src="/images/otagoGrad.JPG"
                id="otagoGradIMG"
                title="2018: Graduation day - My partner Emma and I"
              />
            </div>

            {/* <!-- FLYING  --> */}
            <div className="flyingDiv">
              <p id="flyingContent">
                As a kid, flying was always one of those deep-seeded passions
                that I never really expected I'd pursue, but the combination of
                the intro flight in 2018, and a shortage of pilots, triggered an
                interest in giving it a go. I enrolled in a full-time course in
                2019 to chase the path of being a pilot.
                <br />
                <br />
                Once I got my private license (PPL), Covid-19 hit the world.
                This global event and it's inevitable impact on the Aviation
                industry forced me to step back and reconsider this path.
              </p>
              <img
                src="/images/flying.JPG"
                id="flyingIMG"
                title="2019: My first solo cross country flight"
              />
            </div>

            <div className="XeroDiv">
              <img src="/images/xero.jpg" id="xeroIMG" title="Xero" />
              <p id="xeroContent">
                During lockdown, I wanted to be as productive as possible, and
                fell back on honing in on my interest in Programming that
                sparked while doing Bioinformatics. I tried to learn as much web
                development technologies as possible, which continued to become
                more and more interesting the better I got. Once lockdown ended,
                I managed to secure myself three part-time jobs as a
                Bioinformatics Research Assistant. These jobs allowed me to dive
                into more practical programming, while continuing to progress
                through the online courses, and slowly updated my GitHub profile
                with small projects.
                <br />
                <br />
                I decided some formal programming training would benefit me
                moving forward, so I enrolled in the Postgraduate Certificate in
                Information Technology (PGCertIT) at Auckland University, which
                was a condensed period of both theory, and hands-on experience
                in Web Development technologies (HTML, CSS, JavaScript, Node.js,
                SQL) and Object Oriented Programming in Java. In this course, I
                achieved two 'Certificate of Outstanding Achievement' awards,
                and qualified for the Masters of Information Technology
                (MInfoTech), where I specialised in Software Development and
                Health Informatics.
                <br />
                <br />
                Through this, I managed to get multiple offers from companies
                for a summer internship and I ended up accepting one at Xero. I
                worked hard enough to ask to stay on as a Graduate Engineer,
                which was approved!
                <br />
                From the Graduate program at Xero I eventually got promoted to
                Associate Engineer, and a year later got promoted to an
                Intermediate Full-Stack Engineer and have continued to enjoy
                learning how to become the best Engineer I can be, in both
                technical and non-technical skills.
              </p>
            </div>
          </div>

          <br />
          <hr />
          <br />
          <br />
        </div>
      )}
    </>
  );
}

export default AboutMe;
