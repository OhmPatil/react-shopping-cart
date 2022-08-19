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
    calculateSubtotal(items)
  }

  function handleQuantityChange(id,  quantity){
    let localItems = items
    let localItem = localItems.find(item => item.id === id)
    localItem.quantity = quantity

    setItems(localItems)
    calculateSubtotal(localItems)
    console.log('QUANTITY', localItems); 
  }

  function calculateSubtotal(cartItems) {
    let tempSubtotal = 0
    cartItems.forEach(item => {
      tempSubtotal+=item.price*item.quantity
    })
    setSubTotal(tempSubtotal)
  }

  useEffect(() => {calculateSubtotal(props.cartItems)}, [])

  
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
        <h1>{subtotal}</h1>
      </div>
    </div>
  );
};

export default Cart;
