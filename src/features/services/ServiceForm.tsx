import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  createService,
  updateService,
  cancelEditService,
} from './servicesSlice';

interface FormState {
  name: string;
  price: number;
}

export default function ServiceForm() {
  const dispatch = useAppDispatch();

  const [form, setForm] = useState<FormState>({
    name: '',
    price: 0,
  });

  const { services, editedServiceId } = useAppSelector(
    (store) => store.services
  );

  useEffect(() => {
    if (editedServiceId) {
      const editedService = services.find((o) => o.id === editedServiceId);
      if (editedService) {
        setForm({
          name: editedService.name,
          price: editedService.price,
        });
      }
    } else {
      setForm({
        name: '',
        price: 0,
      });
    }
  }, [editedServiceId, services]);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSave = (event: any) => {
    event.preventDefault();
    if (editedServiceId) {
      dispatch(
        updateService({
          id: editedServiceId,
          name: form.name,
          price: form.price,
        })
      );
    } else {
      dispatch(
        createService({
          id: 0,
          name: form.name,
          price: form.price,
        })
      );
    }
    setForm({
      name: '',
      price: 0,
    });
  };

  const handleCancel = () => {
    dispatch(cancelEditService());
  };

  return (
    <form onSubmit={handleSave}>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        value={form.price}
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
