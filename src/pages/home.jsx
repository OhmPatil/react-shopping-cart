import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <div className="home-card">
        <h2 className="main-text">Fashion straight to your doorstep</h2>
          <Link to="/store" className="shop-button">Shop Now</Link>
      </div>
    </div>
  );
};

export default Home;
