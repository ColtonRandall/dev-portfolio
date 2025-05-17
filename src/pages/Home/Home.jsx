import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Icons from "../../components/Icons/Icons";
import Footer from "../../components/Footer/Footer.jsx";

function Home() {

  return (
    <div className="home">
      <header>
        <Navbar />
        <Header />
      </header>
      <main>
        <Icons />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
