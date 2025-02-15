import "./App.css";
import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import Icons from "../components/Icons.jsx";
import Scrollbar from "../components/Scrollbar.jsx";
import BioButton from "../components/BioButton.jsx";
import AboutMe from "../components/AboutMe.jsx";
import UpArrow from "../components/UpArrow.jsx";

function App() {
  return (
    <body>
      <Navbar />
      <br />
      <br />
      <br />
      <Header />
      <Icons />
      <br />
      <br />

      <Scrollbar />
      <BioButton />
      <AboutMe />
      <UpArrow />
    </body>
  );
}

export default App;
