import ProductInput from "../ProductInput/ProductInput";

const Card = ({productData, onClick}) => {
  return (
    <div className="card">
      <img src={productData.image} alt={productData.description} className="card-image" />
      <h3 className="card-title">productData.title</h3>
      <p className="card-description">productData.description</p>
      <ProductInput onClick={onClick}/>
    </div>
  );
}

export default Card;