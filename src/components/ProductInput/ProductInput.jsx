import { useState } from "react";

const ProductInput = ({ onClick }) => {
  const [inCart, setInCart] = useState(false);
  if (inCart) {
    return (
      <div className="product-input" data-testid="product-input">
        <button>-</button>
        <input type="number" name="cart-count" id="cart-count"/>
        <button>+</button>
      </div>
    );
  } else {
    return (
      <div className="product-input" data-testid="product-input">
        <button
          onClick={() => {
            onClick();
            setInCart(true);
          }}
        >
          Add to Cart
        </button>
      </div>
    );
  }
};

export default ProductInput;