import  styles from "./CardWrapper.module.css"
import Card from "../Card/Card";
import { useOutletContext } from "react-router-dom";


const CardWrapper = ({productData, updateCart, isLoading = false}) => {
  if (isLoading) {
    const cards = [];
    for (let i = 0; i < 20; i++) {
      cards.push(<Card key={i} isLoading={true}/>);
    }
    return (<div className={styles["card-wrapper"]}>
      {cards}
    </div>);
  }
  const cards = productData.map((data) => <Card key={data.id} updateCart={updateCart} productData={data}/>);
  return (
      <div className={styles["card-wrapper"]}>
        {cards}
      </div>
  );
} 

export default CardWrapper;