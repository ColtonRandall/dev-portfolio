import "./Footer.css";

function Footer() {
  const currentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return <footer>© Colton Randall - {currentYear()}</footer>;
}

export default Footer;
