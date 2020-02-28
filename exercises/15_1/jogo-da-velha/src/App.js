import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jogador: 2,
      velha: ['-', '-', '-', '-', '-', '-', '-', '-', '-']
    };
  }

handleClick = (e) => {
  const { jogador, velha } = this.state
  const { className, id } = e.target
  const marcador = (jogador % 2) ? ['X', 0] : ['O', 1]
  if (this.state[className]) return '';
  this.setState(() => {
    const novaVelha = velha;
    novaVelha.splice(id - 1, 1, marcador[0]);
    return {[className]: marcador[0], jogador: marcador[1], velha: novaVelha }})
} 

diagonal(){
  const { velha } = this.state;
  const d1 = (velha[0] === velha[4] && velha[4] === velha[8] && velha[0] !== '-')
  const d2 = (velha[2] === velha[4] && velha[4] === velha[6] && velha[2] !== '-')
  return (d1 || d2);
}

vertical(){
  const { velha } = this.state;
  const v1 = (velha[0] === velha[3] && velha[0] === velha[6] && velha[0] !== '-')
  const v2 = (velha[1] === velha[4] && velha[1] === velha[7] && velha[1] !== '-')
  const v3 = (velha[2] === velha[5] && velha[2] === velha[8] && velha[2] !== '-')
  return (v1 || v2 || v3)
}

horizontal(){
  const { velha } = this.state;
  const h1 = (velha[0] === velha[1] && velha[0] === velha[2] && velha[0] !== '-')
  const h2 = (velha[3] === velha[4] && velha[3] === velha[5] && velha[3] !== '-')
  const h3 = (velha[6] === velha[7] && velha[6] === velha[8] && velha[6] !== '-')
  return (h1 || h2 || h3)
}

verificaVitoria () {
  const a = this.diagonal();
  const b = this.vertical();
  const c = this.horizontal();
  if ( a || b || c ) return <div>Ganhou!</div>
  return ''
}

crateDivs () {
  const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  return (
    <div className="container">
      {numeros.map(numero => {
        return <div key={numero} id={numero} onClick={this.handleClick} data-testid={`teste${numero}`}
          casa={numero} className={`div${numero}`}>{this.state[`div${numero}`]}</div> 
      })}
    </div>
  )
}
  
render(){
  console.log(this.state)
  return (
    <div>
      {this.verificaVitoria()}
      {this.crateDivs()}
    </div>
  );
}
}

export default App;
