import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jogador: 2,
    };
  }

handleClick = (e) => {
  const { jogador } = this.state
  const { className } = e.target
  const marcador = (jogador % 2) ? ['X', 0] : ['O', 1]
  if (this.state[className]) return '';
  this.setState({[className]: marcador[0], jogador: marcador[1] })
} 

crateDivs () {
  const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  return (
    <div className="container">
      {numeros.map(numero => {
        return <div key={numero} onClick={this.handleClick} data-testid={`teste${numero}`}
          className={`div${numero}`}>{this.state[`div${numero}`]}</div> 
      })}
    </div>
  )
}
  
render(){
  return (
    <div>
      {this.crateDivs()}
    </div>
  );
}
}

export default App;
