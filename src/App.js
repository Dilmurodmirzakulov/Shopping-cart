import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import CartItems from "./components/CartItems";
import Layout from "./components/Layout";

function App() {
  const isloggedIn = useSelector(state => state.auth.isLoggedIn)
  console.log(isloggedIn)
  const listItem = useSelector(state => state.cart.itemsList)
  console.log(listItem)
  const showCart = useSelector(state => state.cart.showCart)
  return (
    <div className="App">
      {!isloggedIn && <Auth />}
      {isloggedIn && <Layout />}
      {showCart && <CartItems />}
    </div>
  );
}

export default App;
