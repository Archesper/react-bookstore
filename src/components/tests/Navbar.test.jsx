import {getAllByRole, getByRole, getByTestId, queryByTestId, render, screen} from "@testing-library/react"
import { expect, vi } from "vitest";
import Navbar from "../Navbar/Navbar"

describe("Navbar component", () => {
  it("renders a nav element with links from prop array inside a <ul> element", () => {
    render(<Navbar links={['a', 'b', 'c']}/>);

    const nav = screen.getByRole("navigation");
    const linkContainer = getByRole(nav, "list");
    const links = getAllByRole(linkContainer, "listitem");

    expect(nav).toBeInTheDocument();
    expect(links.length).toEqual(3);
    expect(links[0]).toHaveTextContent(/^a$/);
    expect(links[1]).toHaveTextContent(/^b$/);
    expect(links[2]).toHaveTextContent(/^c$/);
  });
  it("renders CartIcon component if isShopping prop is true", () => {
    render(<Navbar isShopping={true} links={[]}/>);
    vi.mock('../CartIcon/CartIcon', ()=> {
      return {
        default: () => <svg data-testid="icon"></svg>
      }
    })
    const nav = screen.getByRole("navigation");
    expect(getByTestId(nav, 'icon')).toBeInTheDocument();
  })
  it("does not render CartIcon component if isShopping is false", () => {
    render(<Navbar isShopping={false} links={[]}/>);
    vi.mock('../CartIcon/CartIcon', ()=> {
      return {
        default: () => <svg data-testid="icon"></svg>
      }
    })
    const nav = screen.getByRole("navigation");
    expect(queryByTestId(nav, 'icon')).toBeNull();
  })
})