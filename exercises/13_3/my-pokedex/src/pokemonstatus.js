import React from 'react';
import './criarCard.css';
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";

class PokemonStatus extends React.Component {
    render() {
        const { summary, foundAt } = this.props.pokemon
        console.log(foundAt)
        return (
            <div>
                <div>Meu pokemon</div>
                <h1>Sumário</h1>
                <p>{summary}</p>
                <h2>Localização</h2>
                <ul>
                    {foundAt.map(({ location, map }) => {
                        return <li key={location}><img src={map} alt='pokemon'/>{location}</li>
                    })}
                </ul>


                <Link to='/'>Voltar!</Link>
            </div>
        )
    }
}

export default PokemonStatus;