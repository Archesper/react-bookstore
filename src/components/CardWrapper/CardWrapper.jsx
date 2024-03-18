import  styles from "./CardWrapper.module.css"
import Card from "../Card/Card";


const CardWrapper = ({productData, updateCart}) => {
  const cards = productData.map((data) => <Card key={data.id} updateCart={updateCart} productData={data}/>);
  return (
    <main>
      <div className={styles["card-wrapper"]}>
        {cards}
      </div>
    </main>
  );
} 

export default CardWrapper;