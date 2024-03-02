import CartIcon from '../CartIcon/CartIcon';
import { Link } from 'react-router-dom';

const Navbar = ({ links, isShopping }) => {
  const linkItems = links.map((link, index) => (
    <li key={index}>
      <Link to={link.toLowerCase()}>{link}</Link>
    </li>
  ));
  return (
    <>
      <nav>
        <ul>{linkItems}</ul>
        {isShopping ? <CartIcon itemCount={0}/> : ''}
      </nav>
    </>
  );
};

export default Navbar;
