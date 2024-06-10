import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { mockValidDesignerUserData } from "@/components/test/mocks";
import { createSnapShot } from "@/components/test/utils";
import NameStep from ".";

describe("<NameStep/> Component tests", () => {
  test("render first name and last name inputs properly", () => {
    const { container, getByTestId } = render(<NameStep onClick={jest.fn()} />);
    expect(getByTestId("first name")).toBeInTheDocument();
    expect(getByTestId("last name")).toBeInTheDocument();

    createSnapShot(container);
  });

  test("display validation error if fields are empty", () => {
    const { container, getByText } = render(<NameStep onClick={jest.fn()} />);
    fireEvent.click(getByText("Next"));
    expect(getByText("Both first and last names are required.")).toBeTruthy();

    createSnapShot(container);
  });

  test("calls callback with name values on button click", () => {
    const mockCallback = jest.fn();
    const { container, getByTestId, getByText } = render(
      <NameStep onClick={mockCallback} />,
    );

    fireEvent.change(getByTestId("first name"), {
      target: { value: mockValidDesignerUserData.name?.firstName },
    });
    fireEvent.change(getByTestId("last name"), {
      target: { value: mockValidDesignerUserData.name?.lastName },
    });
    fireEvent.click(getByText("Next"));

    expect(mockCallback).toHaveBeenCalledWith("name", {
      firstName: "John",
      lastName: "Doe",
    });

    createSnapShot(container);
  });
});
