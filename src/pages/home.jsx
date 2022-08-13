import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <div className="card">
        <h2 className="main-text">Fashion straight to your doorstep</h2>
        <button>
          <Link to="/store">Shop Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
