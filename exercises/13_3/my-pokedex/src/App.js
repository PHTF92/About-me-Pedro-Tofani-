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
      pokemonFilter: '',
      disabled: false
    }
  }
  proximoCard = () => {
    const b = pokemons.filter(({ type }) => [type, ''].includes(this.state.pokemonFilter))
    let a = b.indexOf(this.state.pokemon)
    if (a === b.length - 1) a = -1;
    a += 1;
    this.setState(() => ({ pokemon: b[a] }))
  }
  setarFiltro = tipo => {
    const tipoPokemon = pokemons.filter(({ type }) => [type, ''].includes(tipo))
    if (tipoPokemon.length === 1) this.setState(() => ({ disabled: true }))
    else this.setState(() => ({ disabled: false }))
    this.setState(() => ({ pokemonFilter: tipo, pokemon: tipoPokemon[0] }))
  }
  zerarFiltro = () => {
    this.setarFiltro('');
  }

  render() {
    return (
      <div>
        <div className="App">
          <h1>Pokedex</h1>
          <div className='container'>
            <CriarCard pokemom={this.state.pokemon} />
          </div>
          <button onClick={this.zerarFiltro}>All</button>
          <CriarTiposBotoes pokemons={pokemons} setarFiltro={this.setarFiltro} />
          <button onClick={this.proximoCard} disabled={this.state.disabled}>Próximo</button>
        </div>
      </div>
    );
  }
}

export default App;
