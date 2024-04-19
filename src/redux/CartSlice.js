/* import {createSlice} from '@reduxjs/toolkit';
import Cart from '../pages/Cart';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    Cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.Cart.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.Cart.push({...action.payload, quantity: 1});
      }
    },
    removeFromCart: (state, action) => {
      const removeFromCart = state.Cart.filter(
        item => item.id !== action.payload.id,
      );
      state.Cart = removeFromCart;
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.Cart.find(item => item.id === action.payload.id);
      itemInCart.quantity++;
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.Cart.find(item => item.id === action.payload.id);
      if (itemInCart.quantity === 1) {
        const removeFromCart = state.Cart.filter(
          item => item.id !== action.payload.id,
        );
        state.Cart = removeFromCart;
      } else {
        itemInCart.quantity--;
      }
    },
  },
});

export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity} =
  cartSlice.actions;

export default cartSlice.reducer; */
