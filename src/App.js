import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Store from "./pages/store";
import Cart from "./pages/cart";
import React, { useState } from "react";
import fetchItem from "./utils/FetchItem";

const App = () => {
  const [cartItems, setCartItems] = useState([])

  const handleAddtoCart = async (e, quantity) => {
    let item = await fetchItem(e.target.id)
    item['quantity'] = quantity
    console.log(item);
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
