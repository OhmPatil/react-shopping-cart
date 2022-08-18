import "../styles/cart.css";
// import ItemCard from "../components/ItemCard";
import CartItemCard from "../components/Cart-ItemCard";
import { useState } from "react";
import { useEffect } from "react";

const Cart = (props) => {
  const [items, setItems] = useState(props.cartItems)
  
  console.log("fromCART", items);

  const handleDelete = (index) => {
    items.splice(index, 1)
    setItems(items)
  }

  useEffect(() => {
    
  },
   [items])
  
  return (
    <div id="cart">
      <div className="product-section">
        {items.map((item, index) => {
          return (
            <CartItemCard
              key={index}
              image={item.image}
              id={item.id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              index={index}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
      <div className="payment-section">
        <h1>Payment stuff</h1>
      </div>
    </div>
  );
};

export default Cart;
