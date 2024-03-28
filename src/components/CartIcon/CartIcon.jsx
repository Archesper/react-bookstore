import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./CartIcon.module.css"

const CartIcon = ({itemCount, onClick}) => {

  return (
    <div className={styles["cart-icon-wrapper"]}>
        <button className={styles.button} onClick={onClick}>
          <ShoppingCartIcon/>
        </button>
        <ItemCount className={styles["item-count"]} count={itemCount}/>
    </div>
  );
};

export default CartIcon;
