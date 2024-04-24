import ProductInput from "../ProductInput/ProductInput";
import styles from "./Card.module.css";

const Card = ({productData, updateCart, isLoading = false}) => {
  if (isLoading) {
    return (
      <div className={styles["loading-card"]}>
      <div className={styles["loading-image"]}></div>
      <h3 className={styles["loading-title"]}></h3>
      <p className={styles["loading-author"]}></p>
      <p className={styles["loading-price"]}></p>
      <button className={styles["loading-btn"]}></button>
    </div>
    )
  }
  return (
    <div className={styles.card}>
      <div className={styles.frame}><img src={productData.image} alt={productData.title} className={styles.image}/></div>
      <h3 className={styles.title}>{productData.title}</h3>
      <p className={styles["author-name"]}>{productData.authorName}</p>
      <p className={styles.price}>{productData.price}</p>
      <ProductInput productData={productData} updateCart={updateCart}/>
    </div>
  );
}

export default Card;