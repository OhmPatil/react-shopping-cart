import "../styles/header.css";
import { Link } from "react-router-dom";
import CartIcon from "./Cart-Icon";

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
