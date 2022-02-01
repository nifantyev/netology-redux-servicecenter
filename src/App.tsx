import React from 'react';
import './App.css';
import ServiceForm from './features/services/ServiceForm';
import ServiceList from './features/services/ServiceList';
import ServiceFilter from './features/services/ServiceFilter';

function App() {
  return (
    <div className="App">
      <ServiceForm />
      <ServiceFilter />
      <ServiceList />
    </div>
  );
}

export default App;
