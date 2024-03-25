import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from '@mui/material/IconButton';
import styles from "./CartIcon.module.css"

const CartIcon = ({itemCount, onClick}) => {
  const classes = styles["item-count"] + (itemCount > 99 ? ` ${styles["overflow"]}` : "");
  return (
    <div className={styles["cart-icon-wrapper"]}>
        <button className={styles.button} onClick={onClick}>
          <ShoppingCartIcon/>
        </button>
        <div data-testid="item-count" className={classes}> {itemCount <= 99 ? itemCount : "99+"} </div>
    </div>
  );
};

export default CartIcon;
