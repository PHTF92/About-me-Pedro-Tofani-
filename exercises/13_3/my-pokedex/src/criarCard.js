import React from 'react';
import './criarCard.css';
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";


class CriarCard extends React.Component {
    render() {
        const {name, type, averageWeight, image} = this.props.pokemom
        return (
            <div className='pokemon container'>
                <div className='card'>
                    <div>{name}</div>
                    <div>{type}</div>
                    <div>{averageWeight.value} {averageWeight.measurementUnit}</div>
                    <Link to='/pokemonstatus'>Mais detalhes</Link>
                </div>
                <div className='card'>
                    <img src={image} alt={name}/>
                </div>
            </div>
        )
    }
}

export default CriarCard;