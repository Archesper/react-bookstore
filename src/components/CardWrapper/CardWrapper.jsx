import { useOutletContext } from "react-router-dom";
import Card from "../Card/Card";

const CardWrapper = () => {
  const {productData, onCardClick} = useOutletContext();
  const cards = productData.map((data) => <Card key={data.id} onClick={onCardClick} productData={data}/>);
  return (
    <div className="cards-wrapper">
      {cards}
    </div>
  );
} 

export default CardWrapper;