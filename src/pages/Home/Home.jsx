import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Icons from "../../components/Icons/Icons";
import ScrollDown from "../../components/ScrollDown/ScrollDown";
import AboutMe from "../AboutMe/AboutMe";
import UpArrow from "../../components/UpArrow/UpArrow.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <Header />
      <Icons />
      <br />
      <br />
      <ScrollDown />
      <AboutMe />
      <UpArrow />
    </div>
  );
}

export default Home;
