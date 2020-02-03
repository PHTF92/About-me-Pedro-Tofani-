import React from 'react';
import CriarCard from './criarCard.js'

class ImportarPokemon extends React.Component {
    render() {
        const { pokemons } = this.props;
        return (
            <div className='arruamarCards'>
                {pokemons.map((pokemon, index) => <CriarCard key={index} pokemon={pokemon} />)}
            </div>
        )
    }
}

export default ImportarPokemon;
