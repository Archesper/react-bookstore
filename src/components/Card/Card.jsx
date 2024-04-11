import ProductInput from "../ProductInput/ProductInput";
import styles from "./Card.module.css";
import cover from "../../../public/cover.webp"

const Card = ({productData, updateCart}) => {
  return (
    <div className={styles.card}>
      <div className={styles.frame}><img src={productData.image} alt={productData.description} className={styles.image}/></div>
      <h3 className={styles.title}>{productData.title}</h3>
      <p className={styles.description}>{productData.description}</p>
      <p className={styles.price}>{productData.price}</p>
      <ProductInput productData={productData} updateCart={updateCart}/>
    </div>
  );
}

export default Card;