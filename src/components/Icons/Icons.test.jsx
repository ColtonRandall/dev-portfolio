import { render } from "@testing-library/react";
import Icons from "./Icons.jsx";

test("renders Icons component", () => {
  const { container } = render(<Icons />);
  expect(container.firstChild).toBeTruthy();
});
