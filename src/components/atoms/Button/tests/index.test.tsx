import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "..";
import { createSnapShot } from "@/components/test/utils";

describe("<Button />", () => {
  test("render button with text", () => {
    const { container, getByText } = render(<Button text="Click Me" onClick={() => { }} />);
    expect(getByText("Click Me")).toBeInTheDocument();
    createSnapShot(container)
  });

  test("call onClick handler", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button text="Click Me" onClick={handleClick} />);
    fireEvent.click(getByText("Click Me"));
    expect(handleClick).toHaveBeenCalled();
  });
});
