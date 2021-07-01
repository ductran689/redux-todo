import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Todos/>
    </div>
  );
}

export default App;
