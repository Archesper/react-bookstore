import  styles from "./CardWrapper.module.css"
import Card from "../Card/Card";
import { useOutletContext } from "react-router-dom";


const CardWrapper = ({productData, updateCart}) => {
  const cards = productData.map((data) => <Card key={data.id} updateCart={updateCart} productData={data}/>);
  return (
      <div className={styles["card-wrapper"]}>
        {cards}
      </div>
  );
} 

export default CardWrapper;