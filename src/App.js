import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Store from "./pages/store";
import Cart from "./pages/cart";
import React, { useState, useEffect } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products/", {
      mode: "cors",
    });
    const data = await response.json();

    return data;
  };

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
    }
    console.log("cart", cartItems);
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/store"
            element={
              <Store handleAddtoCart={handleAddtoCart} products={products} />
            }
          />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
