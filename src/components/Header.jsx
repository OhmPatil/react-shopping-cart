import "../styles/header.css";
import { BrowserRouter, Link } from "react-router-dom";
import Switcher from "./Switcher";
import CartIcon from "./Cart";

const Header = (props) => {
  return (
    <>
      <div id="header">
        <Link to="/">
          <h1 id="title">My Store</h1>
        </Link>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/store">Store</Link>
          <Link to="/cart">
            <CartIcon amount={props.amount} />
          </Link>
        </div>
      </div>
      {/* <Switcher /> */}
    </>
  );
};

export default Header;
