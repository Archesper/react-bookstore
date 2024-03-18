import { useState } from "react";
import styles from "./ProductInput.module.css";

const ProductInput = ({ updateCart, productData }) => {
  const [inCart, setInCart] = useState(false);
  const [inputValue, setInputValue] = useState(0);
  const updateInputValue = (value) => {
    if (parseInt(value) === 0) {
      setInCart(false);
    }
    const sanitizedValue = value.toString().replaceAll(/\D/g, '');
    setInputValue(sanitizedValue);
    updateCart(productData, parseInt(sanitizedValue));
  };
  if (inCart) {
    return (
      <div className={styles["product-input"]} data-testid="product-input">
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
