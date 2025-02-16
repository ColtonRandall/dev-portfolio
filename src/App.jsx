import "./App.css";
import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import Icons from "../components/Icons.jsx";
import Scrollbar from "../components/Scrollbar.jsx";
import AboutMe from "../components/AboutMe.jsx";
import UpArrow from "../components/UpArrow.jsx";

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

      <Scrollbar />
      <AboutMe />
      <UpArrow />
    </div>
  );
}

export default App;
