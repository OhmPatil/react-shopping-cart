import "../styles/item-card.css";

const ItemCard = (props) => {
  return (
    <div className="card">
      <div className="item-img">
        <img src={props.image} alt={props.id} />
      </div>
      <div className="item-title">{props.title}</div>
      <div className="item-price">${props.price}</div>
      <div className="quantity">
        <button>-</button>
        <div>1</div>
        <button>+</button>
      </div>
      {props.showAdd && (
        <button id={props.id} onClick={(e) => props.handleClick(e)}>
          Add to Cart
        </button>
      )}
      {/* <button id={props.id} onClick={(e) => props.handleClick(e)}>Add to Cart</button> */}
    </div>
  );
};

export default ItemCard;
