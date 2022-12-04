import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import "./Cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.showCart())
  }
  const quantity = useSelector(state => state.cart.totalQuantity);
  return (
    <div className="cartIcon" onClick={showCart}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
