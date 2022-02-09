import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import { useAppSelector, useAppDispatch } from '../../app/store';
import { editService, removeService } from './servicesSlice';

export default function ServiceList() {
  const dispatch = useAppDispatch();

  const { services, editedServiceId } = useAppSelector(
    (store) => store.services
  );

  const { filter } = useAppSelector((store) => store.filter);

  const handleEdit = (id: number) => {
    dispatch(editService(id));
  };

  const handleRemove = (id: number) => {
    if (id === editedServiceId) {
      window.alert(
        'Нельзя удалить редактируемый объект. Сначала сохраните его или отмените редактирование'
      );
      return;
    }
    dispatch(removeService(id));
  };

  const filteredServices = services.filter((o) =>
    o.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredServices.map((o) => (
        <li key={o.id}>
          {o.name} {o.price}
          &nbsp;
          <button onClick={() => handleEdit(o.id)}>
            <EditIcon fontSize="small" />
          </button>
          <button onClick={() => handleRemove(o.id)}>
            <CloseIcon fontSize="small" />
          </button>
        </li>
      ))}
    </ul>
  );
}
