import { render, screen } from "@testing-library/react";
import Users from "./User";

it("should render the component", () => {
  // Arrange
  render(<Users />);

  // Act
//   const element = screen.getByRole("textbox", {
//     name: "Name",
//   });

  const element2 = screen.getByPlaceholderText("User name");

  const headingElement = screen.getByRole("heading", {
    level: 2,
  });

  // Assert
  expect(element2).toBeInTheDocument();
//   expect(element).toBeInTheDocument();
  expect(headingElement).toBeInTheDocument();
});
