import React from 'react';
import './App.css';
import pokemons from './data.js'
import CriarCard from './criarCard.js'
import CriarTiposBotoes from './criarTiposBotoes.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: pokemons[0],
      pokemonFilter: 'all'
    }
  }
  proximoCard = () => {
    let a = pokemons.indexOf(this.state.pokemon)
    if (a === pokemons.length - 1) a = -1;
    a += 1;
    this.setState(() => ({ pokemon: pokemons[a] }))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div className="App">
          <h1>Pokedex</h1>
          <div className='container'>
            <CriarCard pokemom={this.state.pokemon} />
          </div>
          <button>All</button>
          <CriarTiposBotoes pokemons={pokemons} />
          <button onClick={this.proximoCard}>Próximo</button>
        </div>
      </div>
    );
  }
}

export default App;
