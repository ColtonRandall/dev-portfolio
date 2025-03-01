import ProjectCard from "../../components/Card/ProjectCard";
import Navbar from "../../components/Navbar/Navbar";
import { Grid2 } from "@mui/material";
import "./Projects.css";

function Projects() {
  return (
    <>
      <title>Projects</title>
      <Navbar />
      <p id="mainTitle">Projects</p>
      <hr />
      <Grid2
        container
        spacing={4}
        direction="row"
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          height: "50vh",
          marginTop: 10,
        }}
      >
        <ProjectCard
          image={"public/images/kalah.png"}
          title={"Kalah Board Game"}
          description={
            "My final assignment for COMPSCI 701: Creating Maintainable Software, one of my postgraduate courses. Kalah is a console app that touches on almost every facet of OOP and maintainable design. You can choose, easy, medium or hard mode against the computer, and flip the board to 'horizontal mode'."
          }
          language={"Java"}
          dateCreated={"07.09.2021"}
          url={"https://github.com/ColtonRandall/Kalah"}
        />

        <ProjectCard
          image={"public/images/rpgGame.jpg"}
          title={"Console RPG App"}
          description={
            "A role playing game built into the console. You can create a player, fight different enemies, and continue on your adventure."
          }
          language={"C#"}
          dateCreated={"10.10.2022"}
          url={"https://github.com/ColtonRandall/console-rpg"}
        />

        <ProjectCard
          image={"public/images/paperScissorsRock.png"}
          title={"Paper Scissors Rock"}
          description={
            "Users make their choice via buttons in the UI. The app tallies up scores against the computer, and after 5 rounds it declares a winner."
          }
          language={"HTML, CSS, JavaScript"}
          dateCreated={"11.10.2023"}
          url={"https://github.com/ColtonRandall/rock-paper-scissors"}
        />

        <ProjectCard
          image={"public/images/shoppingListApp.png"}
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
      </Grid2>
    </>
  );
}

export default Projects;
