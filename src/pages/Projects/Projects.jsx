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
          image={"./images/note-app.png"}
          title={"Full Stack Notes App"}
          description={
            "Java + Spring Boot + React app to create, view, and delete personal notes with a clean, responsive UI."
          }
          language={"Java · Spring Boot · React"}
          dateCreated={"29.06.2025"}
          url={"https://github.com/ColtonRandall/notes-app"}
        />

        <ProjectCard
          image={"./images/java-weather-app.png"}
          title={"Weather App"}
          description={
            "Console-based Java app that mimics a weather API using Spring Boot and REST, built with layered architecture."
          }
          language={"Java · Spring Boot · REST API"}
          dateCreated={"28.03.2025"}
          url={
            "https://github.com/ColtonRandall/java-weather-information-service"
          }
        />

        <ProjectCard
          image={"./images/tictactoe.png"}
          title={"Tic Tac Toe"}
          description={
            "OOP-based C#/.NET console game with a basic AI opponent and game loop logic for win/draw detection."
          }
          language={"C# · .NET 7"}
          dateCreated={"28.02.2025"}
          url={"https://github.com/ColtonRandall/tic-tac-toe-csharp"}
        />

        <ProjectCard
          image={"./images/dev-portfolio-image.png"}
          title={"This Website / Dev Portfolio"}
          description={
            "Personal portfolio site built with React & Material UI; responsive, modular, and evolved from early HTML/CSS work."
          }
          language={"React · JavaScript · Material UI"}
          dateCreated={"01.05.2021"}
          url={"https://github.com/ColtonRandall/dev-portfolio"}
        />

        <ProjectCard
          image={"./images/react-todo.png"}
          title={"Todo App"}
          description={
            "Lightweight React app for task management with persistent state and styled component design."
          }
          language={"React · JavaScript"}
          dateCreated={"31.05.2021"}
          url={"https://github.com/ColtonRandall/react-todo-app"}
        />

        <ProjectCard
          image={"./images/java-contact-book.png"}
          title={"Contact Book"}
          description={
            "Java console CRUD app for managing contacts — a practical refresher in object-oriented programming."
          }
          language={"Java · OOP · Console"}
          dateCreated={"23.03.2025"}
          url={"https://github.com/ColtonRandall/Java-ContactBook"}
        />

        <ProjectCard
          image={"./images/kalah.png"}
          title={"Kalah Board Game"}
          description={
            "Advanced Java console game from a postgraduate assignment, showcasing AI difficulty levels and OOP principles."
          }
          language={"Java · OOP · Game Logic"}
          dateCreated={"07.09.2021"}
          url={"https://github.com/ColtonRandall/Kalah"}
        />

        <ProjectCard
          image={"./images/rpgGame.jpg"}
          title={"Console RPG App"}
          description={
            "Console-based C# RPG game using OOP; features include player creation, enemy combat, and game progression."
          }
          language={"C# · OOP · Console"}
          dateCreated={"10.10.2022"}
          url={"https://github.com/ColtonRandall/console-rpg"}
        />

        <ProjectCard
          image={"./images/paperScissorsRock.png"}
          title={"Paper Scissors Rock"}
          description={
            "JavaScript UI game with interactive buttons, score tracking, and a win declaration after 5 rounds."
          }
          language={"JavaScript · HTML · CSS"}
          dateCreated={"11.10.2023"}
          url={"https://github.com/ColtonRandall/rock-paper-scissors"}
        />

        <ProjectCard
          image={"./images/bulls.png"}
          title={"Bulls & Cows Game"}
          description={
            "OOP-based number guessing game in Java, featuring difficulty levels, computer logic, and .txt file output."
          }
          language={"Java · File I/O · OOP"}
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