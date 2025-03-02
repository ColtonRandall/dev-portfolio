import { Box, keyframes } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

function CenteredArrow() {
  const pulseDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(110px);
  }
`;

  return (
    <Box
      sx={{
        height: "15vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
