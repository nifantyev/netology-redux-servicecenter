import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Service {
  id: number;
  name: string;
  price: number;
}

export interface ServicesState {
  services: Service[];
  editedServiceId?: number;
  filter: string;
}

const initialState: ServicesState = {
  services: [],
  filter: '',
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    createService(state, action: PayloadAction<Service>) {
      const service = action.payload;
      service.id =
        state.services.length > 0
          ? Math.max.apply(
              null,
              state.services.map((o) => o.id)
            ) + 1
          : 1;
      state.services.push(service);
    },
    updateService(state, action: PayloadAction<Service>) {
      const service = action.payload;
      const idx = state.services.findIndex((o) => o.id === service.id);
      if (idx !== -1) {
        state.services[idx] = service;
      }
      state.editedServiceId = undefined;
    },
    removeService(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.services = state.services.filter((o: Service) => o.id !== id);
    },
    editService(state, action: PayloadAction<number>) {
      state.editedServiceId = action.payload;
    },
    cancelEditService(state) {
      state.editedServiceId = undefined;
    },
    updateFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const {
  createService,
  updateService,
  removeService,
  editService,
  cancelEditService,
  updateFilter,
} = servicesSlice.actions;

export default servicesSlice.reducer;
