import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "../CartIcon/CartIcon";
import CartIcon from "../CartIcon/CartIcon";

describe("CartIcon", () => {
  it("Renders a div with the itemCount prop", () => {
    render(<CartIcon itemCount={70}/>);
    const itemCount = screen.getByTestId("item-count");

    expect(itemCount).toHaveTextContent(/^70$/);
  });
  it("Renders 99+ with the 'overflow' className if the itemCount prop is 100 or higher", () => {
    render(<CartIcon itemCount={100}/>);
    const itemCount = screen.getByTestId("item-count");

    expect(itemCount).toHaveTextContent(/^99\+$/);
    expect(itemCount).toHaveClass(/overflow/);
  })
})