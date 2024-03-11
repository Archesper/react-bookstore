import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./CartIcon.module.css"

const CartIcon = ({itemCount}) => {
  return (
    <div className={styles["cart-icon-wrapper"]}>
        <ShoppingCartIcon />
        <div data-testid="item-count" className={styles["item-count"]}> {itemCount} </div>
    </div>
  );
};

export default CartIcon;
