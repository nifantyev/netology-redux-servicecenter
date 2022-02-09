import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import servicesSlice from '../features/services/servicesSlice';
import filterSlice from '../features/services/filterSlice';

export const store = configureStore({
  reducer: {
    services: servicesSlice,
    filter: filterSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
