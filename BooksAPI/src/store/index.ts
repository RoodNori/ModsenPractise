import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import searchReducer from './reducers/searchReducer';
import renderMainReducer from './reducers/renderMainReducer';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    renderMain: renderMainReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
