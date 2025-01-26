import { render, screen } from "@testing-library/react";
import PrimaryButton from "../components/PrimaryButton";

describe("PrimaryButton()", () => {
  it("Should render correctly", () => {
    // Step 1: Render the component
    render(<PrimaryButton />);

    // Step 2: Find the element
    const element = screen.getByText("Click to Add");

    // Step 3: Assert
    expect(element).toBeInTheDocument();
  });

  it("Should render correctly with the action type if provided", () => {
    const actionType = "Post";

    // Step 1: Render the component
    render(<PrimaryButton actionType={actionType} />);

    // Step 2: Find the element
    const element = screen.getByText("Click to " + actionType);

    // Step 3: Assert
    expect(element).toBeInTheDocument();
  });
});
