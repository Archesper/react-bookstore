import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartIcon = ({itemCount}) => {
  console.log(itemCount);
  return (
    <div className="cart-icon-wrapper">
      <ShoppingCartIcon />
      <span className="item-count"> {itemCount} </span>
    </div>
  );
};

export default CartIcon;
