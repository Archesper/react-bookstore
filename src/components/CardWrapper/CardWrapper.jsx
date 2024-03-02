import Card from "../Card/Card";

const CardWrapper = ({productData}) => {
  const cards = productData.map((data) => <Card key={data.id} productData={data}/>);
  return (
    <div className="cards-wrapper">
      {cards}
    </div>
  );
} 

export default CardWrapper;