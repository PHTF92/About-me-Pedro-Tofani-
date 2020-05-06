import React from 'react';

class CriarCard extends React.Component {
    render() {
        const {name, type, averageWeight, image} = this.props.pokemon
        return (
            <div className='pokemon container'>
                <div className='card'>
                    <div>{name}</div>
                    <div>{type}</div>
                    <div>{averageWeight.value} {averageWeight.measurementUnit}</div>
                </div>
                <div className='card'>
                    <img src={image}/>
                </div>
            </div>
        )
    }
}

export default CriarCard;