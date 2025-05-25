import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Navbar from "../../components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import Footer from "../../components/Footer/Footer.jsx";
import CoverImage from "../../components/CoverImage/CoverImage.jsx";

function Projects() {
  return (
    <>
      <Navbar />
      <CoverImage src={"./images/projects-cover.jpg"} />
      <Grid
        container
        spacing={6}
        direction="row"
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          height: "50vh",
          marginTop: 10,
        }}
      >
        <ProjectCard
          image={"./images/dev-portfolio-image.png"}
          title={"This Website / Dev Portfolio"}
          description={
            <>
              The website you're currently on began as my first personal
              project, as a canvas for my early IT courses back in 2021.
              <br />
              <br />
              It’s evolved from basic HTML and CSS into a React app using
              Material UI and other libraries, and is fully responsive for
              smaller screens 📱.
              <br />
              <br />
              You can check out the codebase for the original version of this
              site{" "}
              <a
                href="https://github.com/ColtonRandall/old-portfolio-website"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
              <br />
              <br />I now use this site to showcase my projects, blog posts, and
              other milestones.
            </>
          }
          language={"React, JavaScript, CSS, Material UI"}
          dateCreated={"01.05.2021"}
          url={"https://github.com/ColtonRandall/dev-portfolio"}
        />

        <ProjectCard
          image={"./images/kalah.png"}
          title={"Kalah Board Game"}
          description={
            "My final assignment for COMPSCI 701: Creating Maintainable Software, one of my postgraduate courses. Kalah is a console app that touches on almost every facet of OOP and maintainable design. You can choose, easy, medium or hard mode against the computer, and flip the board to 'horizontal mode'."
          }
          language={"Java"}
          dateCreated={"07.09.2021"}
          url={"https://github.com/ColtonRandall/Kalah"}
        />

        <ProjectCard
          image={"./images/rpgGame.jpg"}
          title={"Console RPG App"}
          description={
            "A role playing game built into the console. You can create a player, fight different enemies, and continue on your adventure."
          }
          language={"C#"}
          dateCreated={"10.10.2022"}
          url={"https://github.com/ColtonRandall/console-rpg"}
        />

        <ProjectCard
          image={"./images/paperScissorsRock.png"}
          title={"Paper Scissors Rock"}
          description={
            "Users make their choice via buttons in the UI. The app tallies up scores against the computer, and after 5 rounds it declares a winner."
          }
          language={"HTML, CSS, JavaScript"}
          dateCreated={"11.10.2023"}
          url={"https://github.com/ColtonRandall/rock-paper-scissors"}
        />

        <ProjectCard
          image={"./images/shoppingListApp.png"}
          title={"Shopping List"}
          description={
            "Basic shopping list app. Let's you create and remove items from the shopping list."
          }
          language={"HTML, Javascript, DOM manipulation"}
          dateCreated={"29.09.2023"}
          url={
            "https://github.com/ColtonRandall/shopping-list-dom-manipulation-project"
          }
        />

        <ProjectCard
          image={"./images/bulls.png"}
          title={"Bulls & Cows Game"}
          description={
            "Similar to Wordle, but with numbers. You play against the computer to guess your randomised 4-digit code, using OOP concepts. There is the choice of easy, medium, or hard mode, prompting the computer to behave differently, and the result is written to a .txt file."
          }
          language={"Java, File I/O"}
          dateCreated={"28.04.2021"}
          url={"https://github.com/ColtonRandall/Bulls-And-Cows-Game"}
          height="50px"
        />
        <Footer />
      </Grid>
    </>
  );
}

export default Projects;
