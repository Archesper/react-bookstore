import {render, screen, getByRole, getByTestId, queryByTestId, getAllByRole} from "@testing-library/react"
import { vi } from "vitest";
import Navbar from "../Navbar/Navbar"
import { Link } from "react-router-dom";

describe("Navbar component", () => {
  it("renders a nav element with links from prop array inside a <ul> element", () => {
    render(<Navbar links={['a', 'b', 'c']}/>);
    vi.mock('react-router-dom', () => {
      const mod = vi.importActual('react-router-dom');
      return {
        ...mod,
        Link: ({to}) => <a href="">{to}</a>
      }
    })

    const nav = screen.getByRole("navigation");
    const linkContainer = getByRole(nav, "list");
    const links = getAllByRole(linkContainer, "link");
    console.log(links);

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