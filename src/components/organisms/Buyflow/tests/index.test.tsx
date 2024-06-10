import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ProductIds } from "@/components/types";
import BuyFlow from "..";
import { mockValidUserData } from "@/components/test/mocks";
import { createSnapShot } from "@/components/test/utils";


describe("BuyFlow Component", () => {
  test("display the correct product name", () => {
    const { container, getByText } = render(<BuyFlow productId={ProductIds.developerIns} />);
    expect(getByText("Buying Developer Insurance")).toBeInTheDocument();

    createSnapShot(container);
  });

  test("render email step initially", () => {
    const { getByTestId } = render(<BuyFlow productId={ProductIds.developerIns} />);
    expect(getByTestId("email")).toBeInTheDocument();

  });

  test("completes the buyflow process properly", () => {
    const { container, getByTestId, getByText } = render(<BuyFlow productId={ProductIds.developerIns} />);

    // Initial email step
    fireEvent.change(getByTestId("email"), { target: { value: mockValidUserData.email } });
    fireEvent.click(getByText("Next"));

    // Transition to age step
    fireEvent.change(getByTestId("age"), { target: { value: mockValidUserData.age } });
    fireEvent.click(getByText("Buy Now"));

    // Verify collected data in the summary step
    expect(getByText("Email: test@getsafe.com")).toBeInTheDocument();
    expect(getByText("Age: 20")).toBeInTheDocument();
    expect(getByText("Purchase")).toBeInTheDocument();

    createSnapShot(container);

  });
});
