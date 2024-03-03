import ProductInput from "../ProductInput/ProductInput";

const Card = ({productData, updateCart}) => {
  return (
    <div className="card">
      <img src={productData.image} alt={productData.description} className="card-image" />
      <h3 className="card-title">{productData.title}</h3>
      <p className="card-description">{productData.description}</p>
      <p className="card-price">{productData.price}</p>
      <ProductInput productData={productData} updateCart={updateCart}/>
    </div>
  );
}

export default Card;