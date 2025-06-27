import { Box } from "@mui/material";
import "./InfoCard.css";

function InfoCard({ icon, title, subTitle, text, bgcolor, iconColor }) {
  return (
    <Box className="section-card" style={{ background: bgcolor }}>
      <div className="section-card-icon">
        {icon({ fontSize: "large", sx: { mb: 0.5, color: iconColor } })}
      </div>
      <div className="section-card-content">
        <h2 className="section-card-title">{title}</h2>
        {subTitle && <div className="section-card-subtitle">{subTitle}</div>}
        <ul className="section-card-list">
          {text.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </Box>
  );
}

export default InfoCard;
