import { configureStore } from '@reduxjs/toolkit';
import { showsReducer } from './showsSlice.ts';

export const store = configureStore({
  reducer: {
    shows: showsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;