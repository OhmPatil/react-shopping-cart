import "../styles/card-container.css";
import ItemCard from "./ItemCard";

const CardContainer = (props) => {
  return (
    <div className="container">
      {props.products.map((item) => {
        return (
          <ItemCard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
