import { useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css"
import modalStyles from "../Modal/Modal.module.css"
import cover from "../../../public/cover.webp"
const Cart = () => {
  const { cartData } = useOutletContext();
  const totalPrice = cartData.reduce((previous, current) => previous + current.price * current.quantity, 0);
  const cartItems = cartData.map((cartItem) => (
    <div key={cartItem.id} className="cart-item" data-testid="cart-item">
      <img src={cover} alt={cartItem.description} />
      <h3>{cartItem.title}</h3>
      <p>{cartItem.price}</p>
    </div>
  ));
  return (
    <div className={styles.cart + " " + modalStyles.cart}>
      {cartItems}
      <div><span>Price:</span> <span data-testid="price">{totalPrice}</span></div>
    </div>
  );
};

export default Cart;
