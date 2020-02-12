import React from 'react';
import './App.css';
import times from './data'
import Times from './Times'

function App() {
  return (
    <div className="App">
      <h1>DropDown-List</h1>
      <Times>{times}</Times>
    </div>
  );
}

export default App;
