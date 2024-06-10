import React from "react";
import { render, screen } from "@testing-library/react";
import SummaryStep from "@/components/molecules/SummaryStep";
import {
  mockValidDesignerUserData,
  mockValidDeveloperUserData,
} from "@/components/test/mocks";
import { createSnapShot } from "@/components/test/utils";

describe("<SummaryStep/> Component tests", () => {
  test("displays collected data and Purchase button correctly for developer insurance", () => {
    const { container } = render(
      <SummaryStep collectedData={mockValidDeveloperUserData} />,
    );

    expect(screen.getByText("Email: test@getsafe.com")).toBeInTheDocument();
    expect(screen.getByText("Age: 20")).toBeInTheDocument();
    expect(screen.getByText("Purchase")).toBeInTheDocument();
    createSnapShot(container);
  });

  test("displays collected data and Purchase button correctly for designer insurance", () => {
    const { container } = render(
      <SummaryStep collectedData={mockValidDesignerUserData} />,
    );

    expect(screen.getByText("Email: test@getsafe.com")).toBeInTheDocument();
    expect(screen.getByText("Age: 20")).toBeInTheDocument();
    expect(screen.getByText("First Name: John")).toBeInTheDocument();
    expect(screen.getByText("Last Name: Doe")).toBeInTheDocument();
    expect(screen.getByText("Purchase")).toBeInTheDocument();
    createSnapShot(container);
  });
});
