import React from 'react';
import './App.css';
import Dog from './Dog'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      nomedoDog: 'Rex'
    };
  }

  inputHandler = (e) => {
    this.setState({ nomedoDog: e.target.value })
  }

  colocarNoArray = (link, nomedoDog = 'Rex') => {
    const { dogs } = this.state;
    console.log(dogs.length)
    if (dogs.length === 10) {
      dogs.shift();
    }
    dogs.push({ URL: link, nome: nomedoDog })
    this.setState(dogs)
  }

  criarDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random', { headers: { Accept: "application/json" } })
      .then(response => response.json())
      .then(data => { this.colocarNoArray(data.message, this.state.nomedoDog) })
  }

  RenderFiguraDog = () => {
    return (
      this.state.dogs.map(cachorro => <li key={cachorro.URL}><img src={cachorro.URL} alt='dog' height='150px'></img>{cachorro.nome}</li>)
    )
  }

  render() {
    console.log(this.state);
    return (
      <div className="App" >
        <button type='button' onClick={this.criarDog}>Doguitos</button>
        <input onChange={this.inputHandler} />
        <Dog cachorros={this.state.dogs} />
      </div >
    );
  }
}

export default App;
