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
            id={item.id}
            handleAddtoCart={props.handleAddtoCart}
            showAdd={true}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
