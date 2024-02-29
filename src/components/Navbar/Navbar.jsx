import CartIcon from '../CartIcon/CartIcon';

const Navbar = ({ links, isShopping }) => {
  const linkItems = links.map((link, index) => (
    <li key={index}>
      <a href="">{link}</a>
    </li>
  ));
  return (
    <>
      <nav>
        <ul>{linkItems}</ul>
        {isShopping && <CartIcon/>}
      </nav>
    </>
  );
};

export default Navbar;
