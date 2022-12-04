import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action){
      const newItem = action.payload;
      const existingItem = state.itemsList.find(item => item.id === newItem.id);
      if(existingItem){
        existingItem.quantity++;
      }else{
        state.itemsList.push(newItem);
      }
      state.totalPrice += newItem.price
      state.totalQuantity++;
    },
    showCart(state){
      state.showCart = !state.showCart;
    },
    removeFromCart(state, action){
      const id = action.payload;
      const existingItem = state.itemsList.find(item => item.id === id)
      if(existingItem.quantity === 1){
        state.itemsList = state.itemsList.filter(item => item.id !== id)
      }else{
        existingItem.quantity--;
      }
      state.totalPrice -= existingItem.price
      state.totalQuantity--;
    }

  }
})

export const cartActions = cartSlice.actions;

export default cartSlice;