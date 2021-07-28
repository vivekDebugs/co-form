import React from 'react';
import './App.css';
import Form from './Form';
import Info from './Info';
import { useStateValue } from './StateProvider';

function App() {
  const [{ submit }] = useStateValue()
  return (
    <div className="app">
      <h1>Material Form</h1>
      <Form />
      {submit ? <Info /> : ''}
    </div>
  );
}

export default App;