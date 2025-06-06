import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer.jsx";
import HomeContent from "../../components/HomeContent/HomeContent.jsx";

function Home() {
  return (
    <>
      <div
        className="home"
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <div style={{ flex: 1 }}>
          <header>
            <Navbar />
            <Header />
          </header>
          <main>
            <HomeContent />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
