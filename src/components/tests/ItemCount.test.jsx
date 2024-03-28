import {render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import ItemCount from "../ItemCount/ItemCount"

describe("ItemCount component unit tests",() => {
  it("Renders a div with the itemCount prop", () => {
    render(<ItemCount count={70}/>);
    const itemCount = screen.getByTestId("item-count");

    expect(itemCount).toHaveTextContent(/^70$/);
  });
  it("displays '99+' when item quantity is 100 or more and has appropriate class", () => {
    render(<ItemCount count={100}/>);
    const itemCount = screen.getByTestId("item-count");

    expect(itemCount).toHaveTextContent(/^99\+$/);
    expect(itemCount).toHaveClass(/overflow/);
  })
})