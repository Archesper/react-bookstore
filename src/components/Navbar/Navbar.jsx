const Navbar = ({ links }) => {
  const linkItems = links.map((link, index) => (
    <li key={index}>
      <a href="">{link}</a>
    </li>
  ));
  return (
    <>
      <nav>
        <ul>{linkItems}</ul>
      </nav>
    </>
  );
};

export default Navbar;
