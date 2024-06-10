import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AgeStep from "..";
import { mockValidUserData } from "@/components/test/mocks";
import { createSnapShot } from "@/components/test/utils";

describe("<AgeStep/> Component tests", () => {
  test("render age input properly", () => {
    const { container, getByTestId } = render(<AgeStep onClick={jest.fn()} />);
    expect(getByTestId("age")).toBeInTheDocument();
    createSnapShot(container);
  });

  test("call callback with age value on button click", () => {
    const mockCallback = jest.fn();
    const { getByTestId, getByText } = render(
      <AgeStep onClick={mockCallback} />,
    );

    fireEvent.change(getByTestId("age"), {
      target: { value: mockValidUserData.age },
    });
    fireEvent.click(getByText("Buy Now"));
    expect(mockCallback).toHaveBeenCalledWith("age", 20);
  });

  test("display an error for invalid decimal age", () => {
    const { container, getByTestId, getByText } = render(
      <AgeStep onClick={jest.fn()} />,
    );
    const input = getByTestId("age");

    fireEvent.change(input, { target: { value: 10.5 } });
    fireEvent.click(getByText("Buy Now"));
    expect(
      getByText("Please enter a valid positive integer age."),
    ).toBeInTheDocument();

    createSnapShot(container);
  });

  test("display an error for invalid negative age", () => {
    const { getByTestId, getByText } = render(<AgeStep onClick={jest.fn()} />);
    const input = getByTestId("age");

    fireEvent.change(input, { target: { value: -10 } });
    fireEvent.click(getByText("Buy Now"));
    expect(
      getByText("Please enter a valid positive integer age."),
    ).toBeInTheDocument();
  });

  test("does not call callback if age is invalid", () => {
    const mockCallback = jest.fn();
    const { getByTestId, getByText } = render(
      <AgeStep onClick={mockCallback} />,
    );

    fireEvent.change(getByTestId("age"), { target: { value: "0" } });
    fireEvent.click(getByText("Buy Now"));
    expect(mockCallback).not.toHaveBeenCalled();
  });
});
