import { getAllByTestId, getByText, getByRole, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider, useOutletContext } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "../App";
import CardWrapper from "../CardWrapper/CardWrapper";



describe("UI tests", () => {
  beforeEach(() => {
    const MockFetcher = () => {
      const {updateCart} = useOutletContext();
      const data = [
        {
          id: 1,
          image: "https://via.placeholder.com/200/92c952",
          title: "Lorem Ipsum",
          author: "Lorem Ipsumly lorem ipsum",
          price: 70,
        },
        {
          id: 2,
          image: "https://via.placeholder.com/200/92c952",
          title: "Lorem Ipsum",
          author: "Lorem Ipsumly lorem ipsum",
          price: 75,
        },
      ];
      return <CardWrapper  updateCart={updateCart} productData={data}/>
    }
    const routes =     [{
      path: "/",
      element: <App/>,
      children: [{path: "/shop", element: <MockFetcher></MockFetcher>}]
    }];
    const router = createMemoryRouter(routes, {initialEntries:["/shop"]});
    render(<RouterProvider router={router} />);
    vi.fn(setTimeout, () => setLoading(false));
  })
  it("shows 0 cart items right after rendering", () => {
    const cartCount = screen.getByTestId("item-count");
    
    expect(cartCount).toHaveTextContent(/^0$/);
  });
  it("Shows 1 when adding item to cart for the first time", async () => {
    const user = userEvent.setup();
    const productInputs = screen.getAllByTestId("product-input");
    const cartCount = screen.getByTestId("item-count");
    const addToCartBtn = getByRole(productInputs[0], "button")
    await user.click(addToCartBtn);
    
    expect(cartCount).toHaveTextContent(/^1$/);
  });
  it("Shows 0 when removing an item that is already in the cart", async () => {
    const user = userEvent.setup();
    const productInputs = screen.getAllByTestId("product-input");
    const cartCount = screen.getByTestId("item-count");
    const addToCartBtn = getByRole(productInputs[0], "button");
    await user.click(addToCartBtn);
    const decrementBtn = getByText(productInputs[0], "-");
    await user.click(decrementBtn);

    expect(cartCount).toHaveTextContent(/^0$/);
  });
  it("Shows 2 when adding two different items to cart for the first time", async () => {
    const user = userEvent.setup();
    const productInputs = screen.getAllByTestId("product-input");
    const cartCount = screen.getByTestId("item-count");
    const addToCartButtons = productInputs.map((productInput) => getByRole(productInput, "button"));
    await user.click(addToCartButtons[0]);
    await user.click(addToCartButtons[1]);

    expect(cartCount).toHaveTextContent(/^2$/);
  });
  it("Updates cart count correctly when changed to an arbitrary value via input", async () => {
    const user = userEvent.setup();
    const productInputs = screen.getAllByTestId("product-input");
    const cartCount = screen.getByTestId("item-count");
    const addToCartBtn = getByRole(productInputs[0], "button");
    await user.click(addToCartBtn);
    const quantityInput = getByRole(productInputs[0], "spinbutton");
    await user.clear(quantityInput);
    await user.type(quantityInput, "17");

    expect(cartCount).toHaveTextContent(/^17$/);
  })
});
