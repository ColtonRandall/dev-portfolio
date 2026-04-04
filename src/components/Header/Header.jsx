import { useState, useEffect } from "react";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import "./Header.css";
import Icons from "../Icons/Icons";

const ROLES = [
  "Software Engineer",
  "Backend Engineer",
  "Java Engineer",
  ".NET Engineer",
  "Spring Boot Engineer",
  "Full-Stack Engineer",
];

const TYPING_SPEED   = 60;
const DELETING_SPEED = 35;
const PAUSE_DURATION = 2200;

function useTypewriter(items) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = items[roleIdx];
    let timeout;

    if (!isDeleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), TYPING_SPEED);
    } else if (!isDeleting && charIdx === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
    } else if (isDeleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), DELETING_SPEED);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setRoleIdx((i) => (i + 1) % items.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, roleIdx, items]);

  return items[roleIdx].slice(0, charIdx);
}

function Header() {
  const displayed = useTypewriter(ROLES);

  return (
    <div id="header">
      <div className="header-text">
        <div className="title">Colton Randall</div>
        <div className="subTitle">
          {displayed}
          <span className="typewriter-cursor">|</span>
        </div>
        <div className="tagline">
          Backend-focused engineer with 5+ years building production systems
          at Xero, Westpac, and Sinch.
        </div>
      </div>
      <img src="./images/me-circle.png" id="mainphoto" alt="Colton Randall" />
      <p id="location">
        <LocationPinIcon style={{ verticalAlign: "middle", marginRight: "0.5rem" }} />
        Melbourne, Australia
      </p>
      <div className="header-icons">
        <Icons />
      </div>
    </div>
  );
}

export default Header;
