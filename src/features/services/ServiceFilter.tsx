import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { updateFilter } from './servicesSlice';

const ServiceFilter: React.FC = () => {
  const dispatch = useAppDispatch();

  const { filter } = useAppSelector((store) => store.services);

  const handleChange = (event: any) => {
    const { value } = event.target;
    dispatch(updateFilter(value));
  };

  return (
    <input type="text" name="filter" value={filter} onChange={handleChange} />
  );
};

export default ServiceFilter;
