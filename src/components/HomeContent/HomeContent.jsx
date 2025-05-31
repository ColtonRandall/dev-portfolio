import "./HomeContent.css";
import { Link, Box } from "@mui/material";

function HomeContent() {
  return (
    <div className="home-content">
      <p>
        <div style={{ textAlign: "center" }}>
          🛠️ <br />
        </div>
        Full stack engineer with strong experience across both front and back
        end, specialising in C# and React, and currently working with Java 17
        and Spring Boot.
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          📚 <br />
        </div>
        Passionate about continuous learning and applying it to build scalable,
        user-friendly solutions with a focus on clean, maintainable code.
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          ☀️ <br />
        </div>
        Outside of work, I enjoy side projects (this portfolio being one of
        them), photography, travel, staying active, and exploring the outdoors
        with my wife and golden retriever.
        <br />
        <br />
        <Box textAlign="center">
          <p>
            Click{" "}
            <Link
              href="/myjourney"
              target="_blank"
              rel="noopener noreferrer"
              color="tomato"
              underline="hover"
            >
              here
            </Link>{" "}
            to view my journey into software engineering.
          </p>
        </Box>
      </p>
    </div>
  );
}

export default HomeContent;
