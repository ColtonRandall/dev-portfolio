import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeContent from "./HomeContent.jsx";

test("renders HomeContent component", () => {
  render(<HomeContent />);
  expect(screen.getByText("My Toolbox")).toBeInTheDocument();
});
