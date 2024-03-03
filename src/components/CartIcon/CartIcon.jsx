import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartIcon = ({itemCount}) => {
  return (
    <div className="cart-icon-wrapper">
      <ShoppingCartIcon />
      <span data-testid="item-count" className="item-count"> {itemCount} </span>
    </div>
  );
};

export default CartIcon;
