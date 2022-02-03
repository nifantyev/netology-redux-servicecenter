import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
  filter: string;
}

const initialState: FilterState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;

export default filterSlice.reducer;
