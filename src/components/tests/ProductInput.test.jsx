import {getAllByRole, getByRole, render, screen} from "@testing-library/react"
import { userEvent } from "@testing-library/user-event";
import { expect } from "vitest";
import ProductInput from "../ProductInput/ProductInput"

describe("ProductInput component",  () => {
  it("Transforms into an incrementable input when button is clicked, and calls event handler prop", async () => {
    const user = userEvent.setup();
    const updateCart = vi.fn();

    render(<ProductInput updateCart={updateCart}/>);
    const component = screen.getByTestId('product-input');
    const button = screen.getByRole('button', {name: /add to cart/i});

    await user.click(button);

    expect(updateCart).toHaveBeenCalled;
    expect(button).not.toBeInTheDocument;
    const input = getByRole(component, "spinbutton");
    expect(input).toBeInTheDocument;
    expect(input).toHaveAttribute("type", "number");
    expect(getAllByRole(component, "button").length).toEqual(2);
  })
} )