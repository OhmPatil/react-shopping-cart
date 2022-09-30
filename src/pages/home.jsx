import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import buttonVariants from "../framer-variants/buttonVariants";

const Home = () => {
  return (
    <motion.div id="home"
    initial={{ opacity:0}}
    animate={{ opacity:1}}
    transition={{duration: 1}}>
      <motion.div className="home-card"
          initial={{ opacity:0}}
          animate={{ opacity:1}}
          transition={{duration: 1}}>
        <motion.h2
          initial={{y: 100, opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{duration: 1}}
          className="main-text">Fashion straight to your doorstep
        </motion.h2>
      <motion.div
        variants={buttonVariants}
        initial={{y: 100, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration: 1}}
        whileTap='click'
        whileHover='hover'>
          <Link to="/store" className="shop-button">Shop Now</Link>
         </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
