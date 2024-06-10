import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EmailStep from "@/components/molecules/EmailStep";
import { mockValidUserData } from "@/components/test/mocks";
import { createSnapShot } from "@/components/test/utils";

describe("<EmailStep/> Component tests", () => {
  test("render email input properly", () => {
    const { container } = render(<EmailStep onClick={jest.fn()} />);
    expect(screen.getByTestId("email")).toBeInTheDocument();

    createSnapShot(container)
  });

  test("display an error for invalid email", () => {
    const { container } = render(<EmailStep onClick={jest.fn()} />);
    const input = screen.getByTestId('email');
    fireEvent.change(input, { target: { value: 'invalid-email' } });
    fireEvent.click(screen.getByText("Next"));
    expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument();

    createSnapShot(container)
  });

  test("call callback with email value on button click", () => {
    const mockCallback = jest.fn();
    render(<EmailStep onClick={mockCallback} />);

    fireEvent.change(screen.getByTestId("email"), { target: { value: mockValidUserData.email } });
    fireEvent.click(screen.getByText("Next"));
    expect(mockCallback).toHaveBeenCalledWith("email", "test@getsafe.com");
  });
});
