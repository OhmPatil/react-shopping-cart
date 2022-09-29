import { BsCart3 } from "react-icons/bs";
import "../styles/cart-icon.css";

const CartIcon = (props) => {
  return (
    <div id="container">
      <BsCart3 size="1.5rem" />
      <div id="amount"><p>{props.amount}</p></div>
    </div>
  );
};

export default CartIcon;
