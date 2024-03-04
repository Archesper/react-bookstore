import { useOutletContext } from "react-router-dom";
import Card from "../Card/Card";

const CardWrapper = () => {
  let {productData, updateCart} = useOutletContext();
  const cards = productData.map((data) => <Card key={data.id} updateCart={updateCart} productData={data}/>);
  return (
    <div className="cards-wrapper">
      {cards}
    </div>
  );
} 

export default CardWrapper;