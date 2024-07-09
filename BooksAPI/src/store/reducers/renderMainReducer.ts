import { createSlice } from '@reduxjs/toolkit';

interface renderState {
  click: boolean,
  renderer: boolean
}

const initialState: renderState = {
  click: false,
  renderer: false
};

const renderSlice = createSlice({
  name: 'render',
  initialState,
  reducers: {
    setClick: (state) => {
      state.click = !state.click;
    },
    setRender: (state) => {
      state.renderer = true;
    },
  },
});

export const { setClick, setRender } = renderSlice.actions;
export default renderSlice.reducer;
