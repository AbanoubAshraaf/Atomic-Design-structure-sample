import React from "react";
import { render } from "@testing-library/react";
import { createSnapShot } from "@/components/test/utils";
import DesignerInsurance from "..";

describe("<DesignerInsurance/> Integration tests", () => {
  test("renders BuyFlow with correct product ID", () => {
    const { container, getByText } = render(<DesignerInsurance />);
    const buyFlowElement = getByText("Buying Designer Insurance");
    expect(buyFlowElement).toBeInTheDocument();

    createSnapShot(container);
  });
});
