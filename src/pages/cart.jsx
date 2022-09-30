import "../styles/cart.css";
import CartItemCard from "../components/Cart-ItemCard";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import orderSummaryVariants from "../framer-variants/orderSummaryVariants";

const Cart = (props) => {
  const [items, setItems] = useState(props.cartItems);
  const [subtotal, setSubTotal] = useState(0);

  const handleDelete = (id) => {
    let localItems = items;
    let item = localItems.find((item) => item.id === id);
    const index = localItems.indexOf(item);

    localItems.splice(index, 1);
    setItems(localItems);
    calculateSubtotal();
    props.decrementCartHeaderAmount();
  };

  function handleQuantityChange(id, quantity) {
    let localItems = items;
    let localItem = localItems.find((item) => item.id === id);
    localItem.quantity = quantity;

    setItems(localItems);
    calculateSubtotal();
  }

  function calculateSubtotal() {
    let tempSubtotal = 0;
    items.forEach((item) => {
      tempSubtotal += item.price * item.quantity;
    });
    setSubTotal(tempSubtotal);
  }

  useEffect(() => {
    calculateSubtotal();
  });

  return (
    <>
      <motion.div
        className="cart-title-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div id="title-1">Your Cart</div>
        <div id="title-2">Order Summary</div>
      </motion.div>
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
          <motion.div
            className="subtotal-container"
            variants={orderSummaryVariants}
            initial="initial"
            animate="visible"
          >
            <div>Subtotal</div>
            <div>${subtotal.toFixed(2)}</div>
          </motion.div>
          <motion.div
            className="shipping-container"
            variants={orderSummaryVariants}
            initial="initial"
            animate="visible"
          >
            <div>Shipping</div>
            <div>FREE</div>
          </motion.div>
          <motion.hr
            className="divider"
            variants={orderSummaryVariants}
            initial="initial"
            animate="visible"
          ></motion.hr>
          <motion.div
            className="total-container"
            variants={orderSummaryVariants}
            initial="initial"
            animate="visible"
          >
            <div>
              <strong>Total</strong>
            </div>
            <div>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>
          </motion.div>
          <motion.button
            id="checkout-button"
            variants={orderSummaryVariants}
            initial="initial"
            animate="visible"
            whileHover="hover"
            whileTap="click"
          >
            Checkout
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Cart;
