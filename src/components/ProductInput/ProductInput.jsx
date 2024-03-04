import { useState } from "react";

const ProductInput = ({ updateCart, productData }) => {
  const [inCart, setInCart] = useState(false);
  const [inputValue, setInputValue] = useState(0);
  const updateInputValue = (value) => {setInputValue(value); updateCart(productData, parseInt(value))}
  if (inCart) {
    return (
      <div className="product-input" data-testid="product-input">
        <button onClick={()=> updateInputValue(inputValue  - 1)}>-</button>
        <input onChange={(e)=> {updateInputValue(e.target.value)}} type="number" value={inputValue} name="cart-count" id="cart-count"/>
        <button onClick={()=> updateInputValue(inputValue  + 1)}>+</button>
      </div>
    );
  } else {
    return (
      <div className="product-input" data-testid="product-input">
        <button
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