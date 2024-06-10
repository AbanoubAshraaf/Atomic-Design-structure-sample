import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputField from "..";
import { createSnapShot } from "@/components/test/utils";

describe("<InputField />", () => {
  test("render input field with label", () => {
    const { container, getByText } = render(
      <InputField
        label="Test Label"
        value=""
        type="text"
        onChange={() => {}}
      />,
    );
    expect(getByText("Test Label:")).toBeInTheDocument();
    createSnapShot(container);
  });

  test("display error message", () => {
    const { container, getByText } = render(
      <InputField
        label="Test Label"
        value=""
        type="text"
        error="Test Error"
        onChange={() => {}}
      />,
    );
    expect(getByText("Test Error")).toBeInTheDocument();
    createSnapShot(container);
  });

  test("call onChange handler", () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <InputField
        label="Test Label"
        value=""
        type="text"
        onChange={handleChange}
      />,
    );
    fireEvent.change(getByTestId("test label"), {
      target: { value: "new value" },
    });
    expect(handleChange).toHaveBeenCalledWith("new value");
  });
});
