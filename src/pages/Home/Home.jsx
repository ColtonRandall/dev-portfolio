import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Icons from "../../components/Icons/Icons";
import ScrollDown from "../../components/ScrollDown/ScrollDown";
import AboutMe from "../AboutMe/AboutMe";
import UpArrow from "../../components/UpArrow/UpArrow.jsx";

function Home() {
  return (
    <div className="home">
      <header>
        <Navbar />
        <br />
        <br />
        <br />
        <Header />
      </header>

      <main>
        <Icons />
        <br />
        <br />
        <ScrollDown />
        <AboutMe />
      </main>

      <footer>
        <UpArrow />
      </footer>
    </div>
  );
}

export default Home;
