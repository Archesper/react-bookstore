import { useOutletContext } from "react-router-dom";
import Card from "../Card/Card";

const CardWrapper = ({testProps}) => {
  let {productData, updateCart} = useOutletContext();
  if (testProps) {
    ({productData, updateCart} = testProps.context);
  }
  const cards = productData.map((data) => <Card key={data.id} updateCart={updateCart} productData={data}/>);
  return (
    <div className="cards-wrapper">
      {cards}
    </div>
  );
} 

export default CardWrapper;