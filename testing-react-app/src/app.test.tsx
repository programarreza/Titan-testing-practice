import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hello world", () => {
  render(<App />);

  const element = screen.getByText(/Hello World/);
  expect(element).toBeInTheDocument();
});
