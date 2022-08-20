import { useState } from "react";
import "../styles/item-card.css";

const ItemCard = (props) => {

  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity+1)
  }

  const decrementQuantity = () => {
    if (quantity > 1){
      setQuantity(prevQuantity => prevQuantity-1)
    }
  }
  
  return (
    <div className="card">
      <div className="item-img">
        <img src={props.image} alt={props.id} />
      </div>
      <div className="item-title">{props.title}</div>
      <div className="item-price">${props.price}</div>
      <div className="store-quantity-container">
        <button className="quantity-button" onClick={decrementQuantity}>−</button>
        <div className="quantity-value">{quantity}</div>
        <button className="quantity-button" onClick={incrementQuantity}>+</button>
      </div>
      {props.showAdd && (
        <button className="addtocart-button" id={props.id} onClick={(e) => props.handleAddtoCart(e, quantity)}>
          Add to Cart
        </button>
      )}
      {/* <button id={props.id} onClick={(e) => props.handleClick(e)}>Add to Cart</button> */}
    </div>
  );
};

export default ItemCard;
