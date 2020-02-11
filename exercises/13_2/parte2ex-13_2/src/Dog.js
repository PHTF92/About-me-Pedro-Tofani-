import React from 'react';

class Dog extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.cachorros.map(cachorro => <li key={cachorro.URL}><img src={cachorro.URL} alt='dog' height='150px'></img>{cachorro.nome}</li>)}
            </div>
        )
    }
}

export default Dog;