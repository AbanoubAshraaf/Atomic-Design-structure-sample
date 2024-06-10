import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "..";

describe("<Button />", () => {
  test("render button with text", () => {
    const { container } = render(<Button text="Click Me" onClick={() => { }} />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();

    // Create a snapshot of the rendered output
    expect(container).toMatchSnapshot();
  });

  test("call onClick handler", () => {
    const handleClick = jest.fn();
    render(<Button text="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalled();
  });
});
