import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Icons from "../../components/Icons/Icons";
import AboutMe from "../AboutMe/AboutMe";
import UpArrow from "../../components/UpArrow/UpArrow.jsx";

function Home() {
  return (
    <div className="home">
      <header>
        <Navbar />
        <Header />
      </header>
      <main>
        <Icons />
        <br />
        <br />
        <AboutMe />
      </main>

      <footer>
        <UpArrow />
      </footer>
    </div>
  );
}

export default Home;
