import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface renderState {
  load: boolean;
}

const initialState: renderState = {
  load: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoad: (state, action: PayloadAction<boolean>) => {
      if (action.payload) state.load = true;
      else state.load = false;
    },
  },
});

export const { setLoad } = loadingSlice.actions;
export default loadingSlice.reducer;
