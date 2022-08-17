import "../styles/cart.css";
import ItemCard from "../components/ItemCard";

const Cart = (props) => {
  let items = props.cartItems;
  console.log("fromCART", items);
  return (
    <div id="cart">
      <div className="product-section">
        {items.map((item) => {
          return (
            <ItemCard
              image={item.image}
              id={item.id}
              title={item.title}
              price={item.price}
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
