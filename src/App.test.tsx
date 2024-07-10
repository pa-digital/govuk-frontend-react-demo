import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders GOV.UK Design System", () => {
  render(<App />);
  const header = screen.getByRole("heading", { level: 1 });
  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent("GOV.UK Design System");
});
