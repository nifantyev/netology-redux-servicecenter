import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Service {
  id: number;
  name: string;
  price: number;
}

export interface ServicesState {
  services: Service[];
  serviceForm: {
    name: string;
    price: number;
  };
  editedServiceId?: number;
}

const initialState: ServicesState = {
  services: [],
  serviceForm: { name: '', price: 0 },
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    saveService(state, action: PayloadAction<Service>) {
      const service = action.payload;
      if (service.id === 0) {
        service.id =
          state.services.length > 0
            ? Math.max.apply(
                null,
                state.services.map((o) => o.id)
              ) + 1
            : 1;
        state.services.push(service);
      } else {
        const idx = state.services.findIndex((o) => o.id === service.id);
        if (idx !== -1) {
          state.services[idx] = service;
        }
      }
      state.serviceForm.name = '';
      state.serviceForm.price = 0;
      state.editedServiceId = undefined;
    },
    removeService(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.services = state.services.filter((o: Service) => o.id !== id);
    },
    editService(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.editedServiceId = action.payload;
      const service = state.services.find((o) => o.id === id);
      if (service) {
        state.serviceForm.name = service.name;
        state.serviceForm.price = service.price;
      }
    },
    cancelEditService(state) {
      state.editedServiceId = undefined;
      state.serviceForm.name = '';
      state.serviceForm.price = 0;
    },
    updateServiceFormProp(
      state,
      action: PayloadAction<{ name: string; value: string | number }>
    ) {
      const { name, value } = action.payload;
      state.serviceForm = { ...state.serviceForm, [name]: value };
    },
  },
});

export const {
  saveService,
  removeService,
  editService,
  cancelEditService,
  updateServiceFormProp,
} = servicesSlice.actions;

export default servicesSlice.reducer;
