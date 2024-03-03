import CartIcon from '../CartIcon/CartIcon';
import { Link } from 'react-router-dom';

const Navbar = ({ links, isShopping, itemCount }) => {
  const linkItems = links.map((link, index) => (
    <li key={index}>
      <Link to={link.toLowerCase()}>{link}</Link>
    </li>
  ));
  return (
    <>
      <nav>
        <ul>{linkItems}</ul>
        {isShopping ? <CartIcon itemCount={itemCount}/> : ''}
      </nav>
    </>
  );
};

export default Navbar;
