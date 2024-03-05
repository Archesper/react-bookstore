import { useOutletContext } from "react-router-dom";
import Card from "../Card/Card";

const CardWrapper = ({productData, updateCart}) => {
  const cards = productData.map((data) => <Card key={data.id} updateCart={updateCart} productData={data}/>);
  return (
    <main>
      <div className="cards-wrapper">
        {cards}
      </div>
    </main>
  );
} 

export default CardWrapper;