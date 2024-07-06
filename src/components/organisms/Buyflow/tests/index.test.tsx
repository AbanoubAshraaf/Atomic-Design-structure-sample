import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { PRODUCT_PROPS, ProductIds } from "@/components/types";
import {
  mockValidDesignerUserData,
  mockValidDeveloperUserData,
} from "@/components/test/mocks";
import { createSnapShot } from "@/components/test/utils";
import BuyFlow from "..";

describe("BuyFlow Component", () => {
  const developerProductProps = PRODUCT_PROPS[ProductIds.developerIns];
  const designerProductProps = PRODUCT_PROPS[ProductIds.designerIns];

  test("display the correct product name for developer insurance", () => {
    const { container, getByText } = render(
      <BuyFlow {...developerProductProps} />,
    );
    expect(getByText("Buying Developer Insurance")).toBeInTheDocument();

    createSnapShot(container);
  });

  test("display the correct product name for designer insurance", () => {
    const { container, getByText } = render(
      <BuyFlow {...designerProductProps} />,
    );
    expect(getByText("Buying Designer Insurance")).toBeInTheDocument();

    createSnapShot(container);
  });

  test("render email step initially", () => {
    const { getByTestId } = render(<BuyFlow {...developerProductProps} />);
    expect(getByTestId("email")).toBeInTheDocument();
  });

  test("completes the buyflow process properly for developer insurance", () => {
    const { container, getByTestId, getByText } = render(
      <BuyFlow {...developerProductProps} />,
    );

    // Initial email step
    fireEvent.change(getByTestId("email"), {
      target: { value: mockValidDeveloperUserData.email },
    });
    fireEvent.click(getByText("Next"));

    // Transition to age step
    fireEvent.change(getByTestId("age"), {
      target: { value: mockValidDeveloperUserData.age },
    });
    fireEvent.click(getByText("Buy Now"));

    // Verify collected data in the summary step
    expect(getByText("Email: test@getsafe.com")).toBeInTheDocument();
    expect(getByText("Age: 20")).toBeInTheDocument();
    expect(getByText("Purchase")).toBeInTheDocument();

    createSnapShot(container);
  });

  test("completes the buyflow process properly for designer insurance", () => {
    const { container, getByTestId, getByText } = render(
      <BuyFlow {...designerProductProps} />,
    );

    // Initial email step
    fireEvent.change(getByTestId("email"), {
      target: { value: mockValidDesignerUserData.email },
    });
    fireEvent.click(getByText("Next"));

    // Transition to name step
    fireEvent.change(getByTestId("first name"), {
      target: { value: mockValidDesignerUserData.name?.firstName },
    });
    fireEvent.change(getByTestId("last name"), {
      target: { value: mockValidDesignerUserData.name?.lastName },
    });
    fireEvent.click(getByText("Next"));

    // Transition to age step
    fireEvent.change(getByTestId("age"), {
      target: { value: mockValidDesignerUserData.age },
    });
    fireEvent.click(getByText("Buy Now"));

    // Verify collected data in the summary step
    expect(getByText("Email: test@getsafe.com")).toBeInTheDocument();
    expect(getByText("Age: 20")).toBeInTheDocument();
    expect(getByText("Purchase")).toBeInTheDocument();
    expect(getByText("First Name: John")).toBeInTheDocument();
    expect(getByText("Last Name: Doe")).toBeInTheDocument();

    createSnapShot(container);
  });
});
