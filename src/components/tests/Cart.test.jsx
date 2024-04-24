import {
  getAllByTestId,
  getByTestId,
  render,
  screen,
} from "@testing-library/react";
import { beforeEach, describe, expect, vi } from "vitest";
import Cart from "../Cart/Cart";

describe("Cart component tests", () => {
  beforeEach(() => {
    render(<Cart />);
    vi.mock("react-router-dom", () => {
      const mod = vi.importActual("react-router-dom");
      return {
        ...mod,
        useOutletContext: () => {
          return {
            cartData: [
              {
                id: 1,
                image: "https://via.placeholder.com/200/92c952",
                title: "Lorem Ipsum",
                authorName: "Lorem Ipsumly lorem ipsum",
                price: 70,
                quantity: 3,
              },
              {
                id: 2,
                image: "https://via.placeholder.com/200/92c952",
                title: "Lorem Ipsum",
                authorName: "Lorem Ipsumly lorem ipsum",
                price: 75,
                quantity: 1,
              },
            ],
          };
        },
      };
    });
  });
  it("renders the correct amount of cart items", () => {
    const cartItems = screen.getAllByTestId("cart-item");

    expect(cartItems.length).toEqual(2);
  });
  it("renders the correct price", () => {
    const price = screen.getByTestId("price");

    expect(price).toHaveTextContent(/^\$ 285$/);
  });
});
