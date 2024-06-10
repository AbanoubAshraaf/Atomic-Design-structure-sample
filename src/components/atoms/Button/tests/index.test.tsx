import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "..";

describe("<Button />", () => {
  test('should match snapshot without text', () => {
    const component = <Button text="Click Me" onClick={() => { }} />;
    expect(render(component)).toMatchSnapshot();
  });

  test("render button with text", () => {
    render(<Button text="Click Me" onClick={() => { }} />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("call onClick handler", () => {
    const handleClick = jest.fn();
    render(<Button text="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalled();
  });
});
