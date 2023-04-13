import { createSlice } from '@reduxjs/toolkit';

const clickedSlice = createSlice({
  name: 'clicked',
  initialState: false,
  reducers: {
    toggleClicked: (state) => {
      return !state;
    },
  },
});

export const { toggleClicked } = clickedSlice.actions;

export default clickedSlice.reducer;
