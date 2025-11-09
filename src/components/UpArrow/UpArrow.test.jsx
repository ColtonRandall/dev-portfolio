import { render } from "@testing-library/react";
import UpArrow from "./UpArrow.jsx";

test("renders UpArrow component", () => {
  const { container } = render(<UpArrow />);
  expect(container.firstChild).toBeTruthy();
});
