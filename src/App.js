import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Pages from './pages/Pages';
import Header from "./common/header/Header";

import Data from "./components/Data";
import Sdata from "./components/shops/Sdata"

import Cart from './common/cart/Cart'

function App() {
  const { productItems } = Data
  const { shopItems } = Sdata

  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else{
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Routes>
          <Route path="/" element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
          <Route path="/cart" element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
