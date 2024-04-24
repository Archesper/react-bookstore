import { useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css";
import modalStyles from "../Modal/Modal.module.css";
import ItemCount from "../ItemCount/ItemCount";
import ProductInput from "../ProductInput/ProductInput";
import CloseIcon from '@mui/icons-material/Close';
const Cart = () => {
  const { cartData, updateCart, toggleIsActive } = useOutletContext();
  const totalPrice = cartData.reduce(
    (previous, current) => previous + current.price * current.quantity,
    0
  );
  const cartItems = cartData.map((cartItem) => (
    <div
      key={cartItem.id}
      className={styles["cart-item"]}
      data-testid="cart-item"
    >
      <div className={styles.frame}>
        <ItemCount className={styles["item-count"]} count={cartItem.quantity}/>
        <img src={cartItem.image} alt={cartItem.title} />
      </div>
      <div className={styles["cart-item-header"]}>
        <h3 className={styles.title}>{cartItem.title}</h3>
        <p className={styles.price}>{cartItem.price * cartItem.quantity}</p>
      </div>
      <ProductInput className={styles["product-input"]} productData={cartItem} updateCart={updateCart} quantity={cartItem.quantity}/>
    </div>
  ));
  return (
    <div className={styles.cart + " " + modalStyles.cart}>
      <h1 className={styles["cart-title"]}>Cart <CloseIcon onClick={() => toggleIsActive()}></CloseIcon></h1>
      <div className={styles["cart-items"]}>{cartItems}</div>
      <div className={styles.total}>
        <span>Total:</span> <span data-testid="price">$ {totalPrice}</span>
      </div>
      <button className={styles["checkout-btn"]}>Checkout</button>
    </div>
  );
};

export default Cart;
