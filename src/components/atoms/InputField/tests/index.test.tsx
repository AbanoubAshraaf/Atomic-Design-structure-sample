import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "..";

describe("<InputField />", () => {
  test("render input field with label", () => {
    const { container } = render(
      <InputField
        label="Test Label"
        value=""
        type="text"
        onChange={() => { }}
      />
    );
    expect(screen.getByText("Test Label:")).toBeInTheDocument();

    // Create a snapshot of the rendered output
    expect(container).toMatchSnapshot();
  });

  test("display error message", () => {
    const { container } = render(
      <InputField
        label="Test Label"
        value=""
        type="text"
        error="Test Error"
        onChange={() => { }}
      />
    );
    expect(screen.getByText("Test Error")).toBeInTheDocument();

    // Create a snapshot of the rendered output
    expect(container).toMatchSnapshot();
  });

  test("call onChange handler", () => {
    const handleChange = jest.fn();
    render(
      <InputField
        label="Test Label"
        value=""
        type="text"
        onChange={handleChange}
      />
    );
    fireEvent.change(screen.getByTestId("test label"), {
      target: { value: "new value" },
    });
    expect(handleChange).toHaveBeenCalledWith("new value");
  });
});
