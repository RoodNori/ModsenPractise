import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface searchState {
  title: string;
  sorting: string;
  filtering: string;
}

const initialState: searchState = {
  title: '',
  sorting: 'relevance',
  filtering: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setFiltering: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case 'art': {
          state.filtering = 'art';
          break;
        }
        case 'biography': {
          state.filtering = 'biography';
          break;
        }
        case 'history': {
          state.filtering = 'history';
          break;
        }
        case 'computers': {
          state.filtering = 'computers';
          break;
        }
        case 'medical': {
          state.filtering = 'medical';
          break;
        }
        case 'poetry': {
          state.filtering = 'poetry';
          break;
        }
        case 'all': {
          state.filtering = '';
          break;
        }
      }
    },
    setSorting: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case 'relevance': {
          state.sorting = 'relevance';
          break;
        }
        case 'newest': {
          state.sorting = 'newest';
          break;
        }
      }
    },
  },
});

export const { setTitle, setSorting, setFiltering } = searchSlice.actions;
export default searchSlice.reducer;