import React from "react";
import { render } from "@testing-library/react";
import { createSnapShot } from "@/components/test/utils";
import DeveloperInsurance from "..";

describe("<DeveloperInsurance/> Integration tests", () => {
  test("render InsuranceBuyFlow with correct product ID", () => {
    const { container, getByText } = render(<DeveloperInsurance />);
    const buyFlowElement = getByText("Buying Developer Insurance");
    expect(buyFlowElement).toBeInTheDocument();

    createSnapShot(container);
  });
});
