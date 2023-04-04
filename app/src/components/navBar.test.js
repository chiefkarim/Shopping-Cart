import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

describe("displays navBar correctly", () => {
  it("displays h1 element", () => {
    render(<Header />);
    expect(screen.getByRole("heading").textContent).toMatch(
      /hello from navbar/i
    );
  });
});
