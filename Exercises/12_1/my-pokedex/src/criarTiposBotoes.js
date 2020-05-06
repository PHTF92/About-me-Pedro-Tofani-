import React from 'react';
import './criarTiposBotoes.css';

class CriarBotoes extends React.Component {
    render() {
        const arranjoTipos = this.props.pokemons.map(pokemon => pokemon.type)
        return (
            [...new Set(arranjoTipos)].map(tipo => <button onClick={
                () => this.props.setarFiltro(tipo)} key={tipo}>{tipo}</button>)
        )
    }
}

export default CriarBotoes