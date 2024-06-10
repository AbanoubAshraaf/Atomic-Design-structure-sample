import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EmailStep from "@/components/molecules/EmailStep";
import { mockValidUserData } from "@/components/test/mocks";
import { createSnapShot } from "@/components/test/utils";

describe("<EmailStep/> Component tests", () => {
  test("render email input properly", () => {
    const { container, getByTestId } = render(<EmailStep onClick={jest.fn()} />);
    expect(getByTestId("email")).toBeInTheDocument();

    createSnapShot(container)
  });

  test("display an error for invalid email", () => {
    const { container, getByTestId, getByText } = render(<EmailStep onClick={jest.fn()} />);
    const input = getByTestId('email');
    fireEvent.change(input, { target: { value: 'invalid-email' } });
    fireEvent.click(getByText("Next"));
    expect(getByText("Please enter a valid email address.")).toBeInTheDocument();

    createSnapShot(container)
  });

  test("call callback with email value on button click", () => {
    const mockCallback = jest.fn();
    const { getByTestId, getByText } = render(<EmailStep onClick={mockCallback} />);

    fireEvent.change(getByTestId("email"), { target: { value: mockValidUserData.email } });
    fireEvent.click(getByText("Next"));
    expect(mockCallback).toHaveBeenCalledWith("email", "test@getsafe.com");
  });
});
