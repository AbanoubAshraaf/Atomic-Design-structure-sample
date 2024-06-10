import React from "react";
import { render } from "@testing-library/react";
import DeveloperInsurance from "../insurance_dev";
import { createSnapShot } from "@/components/test/utils";


describe("<DeveloperInsurance/> Integration tests", () => {
  test("renders BuyFlow with correct product ID", () => {
    const {container,getByText} = render(<DeveloperInsurance />);
    const buyFlowElement = getByText("Buying Developer Insurance");
    expect(buyFlowElement).toBeInTheDocument();
        
    createSnapShot(container);
  });
});
