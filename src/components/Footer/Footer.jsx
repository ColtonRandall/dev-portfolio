import "./Footer.css";

function Footer() {
  const currentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
      <footer>
        © {currentYear()} • Colton Randall • Built with React & Vite ⚡️
      </footer>
  );
}

export default Footer;
