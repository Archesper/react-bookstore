import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./ProductInput.module.css";

const ProductInput = ({ updateCart, productData, className = '' }) => {
  const {cartData} = useOutletContext();
  const cartItem = cartData.find((item) => item.id === productData.id);
  const inputValue = cartItem ? cartItem.quantity : undefined
  const [inCart, setInCart] = useState(inputValue);
  const updateInputValue = (value) => {
    if (parseInt(value) === 0) {
      setInCart(false);
    }
    const sanitizedValue = value.toString().replaceAll(/\D/g, '');
    updateCart(productData, parseInt(sanitizedValue));
  };
  if (inCart) {
    return (
      <div className={styles["product-input"] + " " + className} data-testid="product-input">
        <button
          className={styles["input-btn"]}
          onClick={() => updateInputValue(parseInt(inputValue) - 1)}
        >
          -
        </button>
        <input
          onChange={(e) => {
            updateInputValue(e.target.value);
          }}
          type="number"
          min="0"
          step="1"
          value={inputValue}
          name="cart-count"
          id="cart-count"
        />
        <button
          className={styles["input-btn"]}
          onClick={() => updateInputValue(parseInt(inputValue) + 1)}
        >
          +
        </button>
      </div>
    );
  } else {
    return (
      <div className="product-input" data-testid="product-input">
        <button
          className={styles["add-cart-btn"]}
          onClick={() => {
            setInCart(true);
            updateInputValue(1);
          }}
        >
          Add to Cart
        </button>
      </div>
    );
  }
};

export default ProductInput;
