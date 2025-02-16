import "./App.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import Header from "../components/Header/Header.jsx";
import Icons from "../components/Icons/Icons.jsx";
import ScrollDown from "../components/ScrollDown/ScrollDown.jsx";
import AboutMe from "../components/AboutMe/AboutMe.jsx";
import UpArrow from "../components/UpArrow/UpArrow.jsx";

function App() {
  console.log("App component rendered"); // Debugging
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

export default App;
