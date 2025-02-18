import { render, screen } from "@testing-library/react";
import Header from "./Header.jsx";

test("renders correct name on the screen", () => {
  render(<Header />);
  expect(screen.getByText("Colton Randall"));
});
