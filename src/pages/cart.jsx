import "../styles/cart.css";
// import ItemCard from "../components/ItemCard";
import CartItemCard from "../components/Cart-ItemCard";
import { useState } from "react";
import { useEffect } from "react";

const Cart = (props) => {
  const [items, setItems] = useState(props.cartItems)
  const [subtotal, setSubTotal] = useState(0)

  console.log("fromCART", items);

  const handleDelete = (id) => {
    let localItems = items
    let item = localItems.find(item => item.id === id)
    const index = localItems.indexOf(item)

    localItems.splice(index, 1)
    setItems(localItems)
    calculateSubtotal()
  }

  function handleQuantityChange(id,  quantity){
    let localItems = items
    let localItem = localItems.find(item => item.id === id)
    localItem.quantity = quantity

    setItems(localItems)
    calculateSubtotal()
    console.log('QUANTITY', localItems); 
  }

  function calculateSubtotal() {
    let tempSubtotal = 0
    items.forEach(item => {
      tempSubtotal+=item.price*item.quantity
    })
    setSubTotal(tempSubtotal)
  }

  useEffect(() => {calculateSubtotal()})

  
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
              handleDelete={handleDelete}
              handleQuantityChange={handleQuantityChange}
            />
          );
        })}
      </div>
      <div className="payment-section">
        <h1>{subtotal.toFixed(2)}</h1>
      </div>
    </div>
  );
};

export default Cart;
