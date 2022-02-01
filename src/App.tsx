import React from 'react';
import './App.css';
import ServiceForm from './features/services/ServiceForm';
import ServiceList from './features/services/ServiceList';

function App() {
  return (
    <div className="App">
      <ServiceForm />
      <ServiceList />
    </div>
  );
}

export default App;
