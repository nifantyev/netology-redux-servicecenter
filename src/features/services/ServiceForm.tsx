import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  saveService,
  updateServiceFormProp,
  cancelEditService,
} from './servicesSlice';

export default function ServiceForm() {
  const dispatch = useAppDispatch();

  const { serviceForm, editedServiceId } = useAppSelector(
    (store) => store.services
  );

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    dispatch(updateServiceFormProp({ name, value }));
  };

  const handleSave = (event: any) => {
    event.preventDefault();
    dispatch(
      saveService({
        id: editedServiceId ?? 0,
        name: serviceForm.name,
        price: serviceForm.price,
      })
    );
  };

  const handleCancel = () => {
    dispatch(cancelEditService());
  };

  return (
    <form onSubmit={handleSave}>
      <input
        type="text"
        name="name"
        value={serviceForm.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        value={serviceForm.price}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
      {editedServiceId && (
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}
