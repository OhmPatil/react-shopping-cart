import { useState } from "react";
import "../styles/item-card.css";
import buttonVariants from "../framer-variants/buttonVariants";
import { motion } from "framer-motion";

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
    <motion.div className="card"
      initial={{y:100, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{duration:0.5, delay:0}}>
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
        <motion.button
          variants={buttonVariants}
          whileTap='click'
          whileHover='hover'
          className="addtocart-button" id={props.id} onClick={(e) => props.handleAddtoCart(e, quantity)}>
          Add to Cart
        </motion.button>
      )}
    </motion.div>
  );
};

export default ItemCard;
