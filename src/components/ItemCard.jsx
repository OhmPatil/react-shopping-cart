import "../styles/item-card.css";

const ItemCard = (props) => {
  return (
    <div className="card">
      <div className="item-img">
        <img src={props.image} alt={props.id} />
      </div>
      <div className="item-title">{props.title}</div>
      <div className="item-price">${props.price}</div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ItemCard;
