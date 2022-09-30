import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Store from "./pages/store";
import Cart from "./pages/cart";
import React, { useState, useEffect } from "react";
import fetchData from "./utils/fetchData";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartHeaderAmount, setCartHeaderAmount] = useState(0)

  useEffect(() => {
    async function loadData() {
      let reqData = [];
      let allData = await fetchData();

      allData.forEach((item) => {
        if (
          item.category === "men's clothing" ||
          item.category === "women's clothing"
        ) {
          reqData.push(item);
        }
      });

      setProducts(reqData);
    }

    loadData();
  }, []);

  const handleAddtoCart = async (e, quantity) => {
    let itemID = parseInt(e.target.id);

    let itemInCart = cartItems.find((item) => item.id === itemID);
    if (itemInCart !== undefined) {
      itemInCart.quantity += quantity;
    } else {
      let item = products.find((item) => item.id === itemID);
      item["quantity"] = quantity;
      setCartItems((prevItems) => [...prevItems, item]);
      setCartHeaderAmount(prevAmount => prevAmount+1)
    }
  };

  const decrementCartHeaderAmount = () => {
    setCartHeaderAmount(prevAmount => prevAmount-1)
  }

  return (
    <>
      <HashRouter>
        <Header amount={cartHeaderAmount}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route
            exact path="/store"
            element={
              <Store handleAddtoCart={handleAddtoCart} products={products} />
            }
          />
          <Route path="/cart" element={<Cart cartItems={cartItems} decrementCartHeaderAmount={decrementCartHeaderAmount} />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
};

export default App;
