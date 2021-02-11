import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import logger from 'redux-logger';

import rootReducer, { RootState } from '@/store/reducer';

const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
