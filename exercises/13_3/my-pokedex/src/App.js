import React from 'react';
import './App.css';
import pokemons from './data.js'
import CriarCard from './criarCard.js'
import CriarTiposBotoes from './criarTiposBotoes.js'
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import About from './About'
import Notfound from './notfound'
import PokemonStatus from './pokemonstatus'

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
  links = () => {
    return (
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>

    )
  }

  gerarAgenda = () => {
    return (
      <div>
        <div className='container'>
          <CriarCard pokemom={this.state.pokemon} />
        </div>
        <button onClick={this.zerarFiltro}>All</button>
        <CriarTiposBotoes pokemons={pokemons} setarFiltro={this.setarFiltro} />
        <button onClick={this.proximoCard} disabled={this.state.disabled}>Próximo</button>
      </div>
    )
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Pokedex!</h1>
          {this.links()}
          <Switch>
            <Route path='/about' component={About} />
            <Route exact path='/' component={this.gerarAgenda} />
            <Route path='/pokemonstatus/'
              render={(props) => (
                <PokemonStatus {...props} pokemon={this.state.pokemon} />
              )}
            />
            <Route component={Notfound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
