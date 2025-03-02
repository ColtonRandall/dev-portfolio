import { Box, keyframes } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

function CenteredArrow() {
  const pulseDown = keyframes`
  0%, 100% {
    transform: translateY(-90px);
  }
  50% {
    transform: translateY(20px);
  }
`;

  return (
    <Box
      className="scroll"
      sx={{
        height: "15vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "@media(max-width: 900px)": {
          display: "none",
        },
      }}
    >
      <ExpandCircleDownIcon
        className="scroll"
        sx={{
          fontSize: 50,
          animation: `${pulseDown} 2.5s infinite ease-in-out`,
        }}
      />
    </Box>
  );
}

export default CenteredArrow;
