import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import servicesSlice from '../features/services/servicesSlice';

export const store = configureStore({
  reducer: {
    services: servicesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
