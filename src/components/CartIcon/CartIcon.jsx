import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./CartIcon.module.css"

const CartIcon = ({itemCount}) => {
  const classes = styles["item-count"] + (itemCount > 99 ? ` ${styles["overflow"]}` : "");
  return (
    <div className={styles["cart-icon-wrapper"]}>
        <ShoppingCartIcon />
        <div data-testid="item-count" className={classes}> {itemCount <= 99 ? itemCount : "99+"} </div>
    </div>
  );
};

export default CartIcon;
