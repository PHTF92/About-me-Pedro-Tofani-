import React from 'react';

class Dog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pularLocalStorage: true
        };
    }

    componentWillUnmount() {
        console.log('unmount')
        const arranjoCachorros = this.props.cachorros
        arranjoCachorros.forEach(cachorro => {
            localStorage.setItem(cachorro.nome, cachorro.URL)
        });
    }

    render() {
        if (this.props.destruir) return null
        if (localStorage.length) {
            const chaves = []
            for (var i = 0; i < localStorage.length; i++) {
                chaves.push(localStorage.key(i));
            }
            return (
                <div>
                    {chaves.map(cachorro => <li key={localStorage.getItem(cachorro)}><img src={localStorage.getItem(cachorro)} alt='dog' height='150px'></img>{cachorro}</li>)}
                    {localStorage.clear()}
                </div>
            )
        }
        return (
            <div>
                {this.props.cachorros.map(cachorro => <li key={cachorro.URL}><img src={cachorro.URL} alt='dog' height='150px'></img>{cachorro.nome}</li>)}
            </div>
        )
    }
}

export default Dog;