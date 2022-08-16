import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Store from "./pages/store";
import Cart from "./pages/cart";
import React, { useState } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState([])

  const fetchItem = async (itemID) => {
    const response = await fetch(`https://fakestoreapi.com/products/${itemID}`, {mode:"cors"})
    const item = await response.json()

    return item
  }

  const handleAddtoCart = async (e) => {
    let item = await fetchItem(e.target.id)
    setCartItems(prevItems => [...prevItems, item])
    console.log('cart', cartItems);
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={<Store handleAddtoCart={handleAddtoCart}/>} />
          <Route path="/cart" element={<Cart cartItems={cartItems}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
