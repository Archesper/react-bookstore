import { useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css";
import modalStyles from "../Modal/Modal.module.css";
import ItemCount from "../ItemCount/ItemCount";
const Cart = () => {
  const { cartData } = useOutletContext();
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
        <img src={cartItem.image} alt={cartItem.description} />
      </div>
      <h3 className={styles.title}>{cartItem.title}</h3>
      <p className={styles.price}>{cartItem.price * cartItem.quantity}</p>
    </div>
  ));
  return (
    <div className={styles.cart + " " + modalStyles.cart}>
      <h1 className={styles["cart-title"]}>Cart</h1>
      <div className={styles["cart-items"]}>{cartItems}</div>
      <div className={styles.total}>
        <span>Total:</span> <span data-testid="price">$ {totalPrice}</span>
      </div>
      <button className={styles["checkout-btn"]}>Checkout</button>
    </div>
  );
};

export default Cart;
