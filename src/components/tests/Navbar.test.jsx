import {
  render,
  screen,
  getByRole,
  getByTestId,
  queryByTestId,
  getAllByRole,
} from "@testing-library/react";
import { expect, vi } from "vitest";
import Navbar from "../Navbar/Navbar";

describe("Navbar component", () => {
  it("renders a nav element with links from prop array inside a <ul> element", () => {
    render(<Navbar links={["a", "b", "c"]} />);
    vi.mock("react-router-dom", () => {
      const mod = vi.importActual("react-router-dom");
      return {
        ...mod,
        Link: ({ to }) => <a href="">{to}</a>,
      };
    });

    const nav = screen.getByRole("navigation");
    const linkContainer = getByRole(nav, "list");
    const links = getAllByRole(linkContainer, "link");

    expect(nav).toBeInTheDocument();
    expect(links.length).toEqual(3);
    expect(links[0]).toHaveTextContent(/^a$/);
    expect(links[1]).toHaveTextContent(/^b$/);
    expect(links[2]).toHaveTextContent(/^c$/);
  });
  it("renders CartIcon component if activeLink is shop", () => {
    render(<Navbar activeLink={"shop"} links={[]} />);
    vi.mock("../CartIcon/CartIcon", () => {
      return {
        default: () => <svg data-testid="icon"></svg>,
      };
    });
    const nav = screen.getByRole("navigation");
    expect(getByTestId(nav, "icon")).toBeInTheDocument();
  });
  it("does not render CartIcon component if isShopping is false", () => {
    render(<Navbar activeLink={"home"} links={[]} />);
    vi.mock("../CartIcon/CartIcon", () => {
      return {
        default: () => <svg data-testid="icon"></svg>,
      };
    });
    const nav = screen.getByRole("navigation");
    expect(queryByTestId(nav, "icon")).toBeNull();
  });
  it("renders active link with active-link class", () => {
    render(<Navbar activeLink={"a"} links={["a", "b", "c"]} />);

    vi.mock("react-router-dom", () => {
      const mod = vi.importActual("react-router-dom");
      return {
        ...mod,
        Link: ({ to, id }) => (
          <a id={id} href="">
            {to}
          </a>
        ),
      };
    });
    const nav = screen.getByRole("navigation");
    const links = getAllByRole(nav, "link");
    expect(links[0].id).toMatch(/active/);
  });
});
