import React from "react";
import { render, screen } from "@testing-library/react";
import SummaryStep from "@/components/molecules/SummaryStep";
import { mockValidUserData } from "@/components/test/mocks";
import { createSnapShot } from "@/components/test/utils";

describe("<SummaryStep/> Component tests", () => {
  test('should match snapshot', () => {
    const {container} = render(<SummaryStep collectedData={mockValidUserData}/>);

    createSnapShot(container)
  });

  test("displays collected data and Purchase button correctly", () => {
    render(<SummaryStep collectedData={mockValidUserData} />);

    expect(screen.getByText("Email: test@getsafe.com")).toBeTruthy();
    expect(screen.getByText("Age: 20")).toBeTruthy();
    expect(screen.getByText("Purchase")).toBeTruthy();
  });
});
