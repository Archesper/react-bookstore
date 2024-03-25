import CartIcon from '../CartIcon/CartIcon';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";

const Navbar = ({ links, activeLink, itemCount, onIconClick }) => {
  console.log(activeLink);
  const linkItems = links.map((link, index) => (
    <li key={index}>
      <Link {...{id: link === activeLink ? styles.active : ""}} to={link.toLowerCase() === "home" ? "/" : link.toLowerCase()}>{link}</Link>
    </li>
  ));
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.links}>{linkItems}</ul>
        {activeLink === "shop" ? <CartIcon onClick={onIconClick}  itemCount={itemCount}/> : ''}
      </nav>
    </>
  );
};

export default Navbar;
