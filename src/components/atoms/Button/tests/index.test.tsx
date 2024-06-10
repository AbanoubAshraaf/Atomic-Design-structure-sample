import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "..";
import { createSnapShot } from "@/components/test/utils";

describe("<Button />", () => {
  test("render button with text", () => {
    const { container } = render(<Button text="Click Me" onClick={() => { }} />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
    createSnapShot(container)
  });

  test("call onClick handler", () => {
    const handleClick = jest.fn();
    render(<Button text="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalled();
  });
});
