import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, price } = action.payload;
      if (state[name]) {
        state[name].count += 1;
      } else {
        state[name] = { price: price, count: 1 };
      }
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
