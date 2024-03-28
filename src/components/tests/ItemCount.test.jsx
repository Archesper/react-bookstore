import {render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import ItemCount from "../tests/ItemCount.test"

describe(() => {
  it("displays '99+' when item quantity is 100 or more and has appropriate class", () => {
    render(<ItemCount/>);
    const itemCount = screen.getByTestId("item-count");

    expect(itemCount).toHaveTextContent(/^99+$/);
    expect(itemCount).toHaveClass(/overflow/);
  })
})