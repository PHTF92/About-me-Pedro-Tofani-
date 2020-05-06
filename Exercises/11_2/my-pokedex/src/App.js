import React from 'react';
import './App.css';
import ImportarPokemon from './passarPokemon'
import pokemons from './data.js'

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className='container'>
        <ImportarPokemon pokemons={pokemons}/>  
      </div>
    </div>
  );
}

export default App;
