import React from 'react';
import pokemons from './data.js'

class ImportarPokemon extends React.Component {
    render() {
        return (
            pokemons.map(pokemon => <div className='pokemon'>{pokemon.name}</div>)
        )
    }
}

export default ImportarPokemon;
