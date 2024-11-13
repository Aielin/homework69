import { configureStore } from '@reduxjs/toolkit';
import { showsReducer } from './showsSlice.ts';
import { showDetailsReducer } from './showDetailsSlice.ts';

export const store = configureStore({
  reducer: {
    shows: showsReducer,
    showDetails: showDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
