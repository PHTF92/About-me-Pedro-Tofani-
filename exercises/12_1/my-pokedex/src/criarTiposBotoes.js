import React from 'react';
import './criarTiposBotoes.css';

class CriarBotoes extends React.Component {
    setarFiltro = event => {
        console.log((event.target.innerText))
    }
    render() {
        const arranjoTipos = this.props.pokemons.map(pokemon => pokemon.type)
        return (
            [...new Set(arranjoTipos)].map(tipo => <button onClick={this.setarFiltro} key={tipo}>{tipo}</button>)
        )
    }
}

export default CriarBotoes