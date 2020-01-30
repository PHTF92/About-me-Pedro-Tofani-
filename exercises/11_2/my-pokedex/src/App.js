import React from 'react';
import './App.css';
import ImportarPokemon from './passarPokemon'

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className='container'>
      <ImportarPokemon />
      </div>
    </div>
  );
}

export default App;
