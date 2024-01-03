import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: true,
};

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleButton: (state) => {
      state.value = !state.value
    },
  },
});

export const { toggleButton } = toggleSlice.actions;

export default toggleSlice.reducer;
