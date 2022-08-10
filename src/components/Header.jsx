import "../styles/header.css";
import { BrowserRouter, Link } from "react-router-dom";
import Switcher from "./Switcher";

const Header = () => {
  return (
    <BrowserRouter>
      <div id="header">
        <h1>My Store</h1>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/store">Store</Link>
        </div>
      </div>
      <Switcher/>
    </BrowserRouter>
  );
};

export default Header;
