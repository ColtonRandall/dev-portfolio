const PROJECTS = [
  {
    image: "./images/octocat.png",
    title: "Task Manager API",
    description:
      "Java 21 + Spring Boot REST API with JPA/H2 persistence, soft deletes, event publishing, Docker support, and GitHub Actions CI/CD.",
    language: "Java · Spring Boot · Docker",
    dateCreated: "04.03.2026",
    url: "https://github.com/ColtonRandall/task-manager-api",
    tags: ["Java"],
  },
  {
    image: "./images/octocat.png",
    title: "SMS Routing Service",
    description:
      "Java 21 + Spring Boot REST API that routes outbound SMS messages to the correct carrier (AU, NZ, Global) based on phone prefix, with opt-out compliance and delivery state tracking.",
    language: "Java · Spring Boot · REST API",
    dateCreated: "11.01.2026",
    url: "https://github.com/ColtonRandall/sms-routing-service",
    tags: ["Java"],
  },
  {
    image: "./images/octocat.png",
    title: "CI/CD Release Retention",
    description:
      "A C#/.NET 8 utility that determines which software releases to retain based on recent deployment activity, with a full unit test suite.",
    language: "C# · .NET 8 · Unit Testing",
    dateCreated: "12.11.2025",
    url: "https://github.com/ColtonRandall/cicd-release-retention-project",
    tags: ["C#"],
  },
  {
    image: "./gif/aiCodeExplainer.gif",
    title: "AI Code Explainer",
    description: (
      <>
        A Next.js and TypeScript web app that integrates with the OpenRouter API
        to deliver AI-powered text generation via the LLaMA 3 model to explain
        code. Implemented API communication with Axios and deployed the project
        on Vercel - see live app{" "}
        <a
          href="https://ai-code-explainer-sigma.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "orange",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          here.
        </a>
      </>
    ),
    language: "AI · Next.js · TypeScript",
    dateCreated: "29.07.2025",
    url: "https://github.com/ColtonRandall/ai-code-explainer",
    tags: ["AI", "React"],
  },
  {
    image: "./gif/notesApp.gif",
    title: "Full Stack Notes App",
    description:
      "Java + Spring Boot + React app to create, view, and delete personal notes with a clean, responsive UI.",
    language: "Java · Spring Boot · React",
    dateCreated: "29.06.2025",
    url: "https://github.com/ColtonRandall/notes-app",
    tags: ["Java", "React"],
  },
  {
    image: "./images/tictactoe.png",
    title: "Tic Tac Toe",
    description:
      "OOP-based C#/.NET console game with a basic AI opponent and game loop logic for win/draw detection.",
    language: "C# · .NET 7",
    dateCreated: "28.02.2025",
    url: "https://github.com/ColtonRandall/tic-tac-toe-csharp",
    tags: ["C#"],
  },
  {
    image: "./images/dev-portfolio-image.png",
    title: "This Website / Dev Portfolio",
    description:
      "Personal portfolio site built with React & Material UI; responsive, modular, and evolved from early HTML/CSS work.",
    language: "React · JavaScript · Material UI",
    dateCreated: "01.05.2021",
    url: "https://github.com/ColtonRandall/dev-portfolio",
    tags: ["React", "JavaScript"],
  },
  {
    image: "./images/kalah.png",
    title: "Kalah Board Game",
    description:
      "Advanced Java console game from a postgraduate assignment, showcasing AI difficulty levels and OOP principles.",
    language: "Java · OOP · Game Logic",
    dateCreated: "07.09.2021",
    url: "https://github.com/ColtonRandall/Kalah",
    tags: ["Java"],
  },
  {
    image: "./images/rpgGame.jpg",
    title: "Console RPG App",
    description:
      "Console-based C# RPG game using OOP; features include player creation, enemy combat, and game progression.",
    language: "C# · OOP · Console",
    dateCreated: "10.10.2022",
    url: "https://github.com/ColtonRandall/console-rpg",
    tags: ["C#"],
  },
  {
    image: "./images/bulls.png",
    title: "Bulls & Cows Game",
    description:
      "OOP-based number guessing game in Java, featuring difficulty levels, computer logic, and .txt file output.",
    language: "Java · File I/O · OOP",
    dateCreated: "28.04.2021",
    url: "https://github.com/ColtonRandall/Bulls-And-Cows-Game",
    tags: ["Java"],
  },
];

export default PROJECTS;
