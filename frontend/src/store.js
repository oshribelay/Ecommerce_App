import { configureStore } from '@reduxjs/toolkit';
import clickedReducer from './reducers/clicked';
import cartReducer from './reducers/cart';

const store = configureStore({
  reducer: {
    clicked: clickedReducer,
    cart: cartReducer
  },
});

export default store;
