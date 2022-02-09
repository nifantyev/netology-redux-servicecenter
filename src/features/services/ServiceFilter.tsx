import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/store';
import { updateFilter } from './filterSlice';

const ServiceFilter: React.FC = () => {
  const dispatch = useAppDispatch();

  const { filter } = useAppSelector((store) => store.filter);

  const handleChange = (event: any) => {
    const { value } = event.target;
    dispatch(updateFilter(value));
  };

  return (
    <input type="text" name="filter" value={filter} onChange={handleChange} />
  );
};

export default ServiceFilter;
