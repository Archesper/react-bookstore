import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const { cartData } = useOutletContext();
  const totalPrice = cartData.reduce((previous, current) => previous + current.price * current.quantity, 0);
  const cartItems = cartData.map((cartItem) => (
    <div className="cart-item" data-testid="cart-item">
      <img src={cartItem.image} alt={cartItem.description} />
      <h3>{cartItem.title}</h3>
      <p>{cartItem.price}</p>
    </div>
  ));
  return (
    <div className="cart">
      {cartItems}
      <div><span>Price:</span> <span data-testid="price">{totalPrice}</span></div>
    </div>
  );
};

export default Cart;
