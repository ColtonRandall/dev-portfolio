import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return <footer>© Colton Randall - {currentYear}</footer>;
}

export default Footer;
