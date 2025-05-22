import "./Footer.css";

function Footer() {
  const currentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return <footer>© Colton Randall - 2025</footer>;
}

export default Footer;
