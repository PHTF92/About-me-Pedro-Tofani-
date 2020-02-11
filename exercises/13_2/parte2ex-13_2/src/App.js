import React from 'react';
import './App.css';
import Dog from './Dog'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      nomedoDog: 'Rex',
      atualizaComponet: true,
      destruir: false
    };
  }

  inputHandler = (e) => {
    this.setState({ nomedoDog: e.target.value })
  }

  colocarNoArray = (link, nomedoDog = 'Rex') => {
    const { dogs } = this.state;
    if (dogs.length === 10) {
      dogs.shift();
    }
    dogs.push({ URL: link, nome: nomedoDog })
    this.setState(dogs)
  }

  criarDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random', { headers: { Accept: "application/json" } })
      .then(response => response.json())
      .then(data => {
        this.colocarNoArray(data.message, this.state.nomedoDog)
        if (data.message.includes('terrier')) {
          this.setState({ atualizaComponet: false })
        }
        else this.setState({ atualizaComponet: true })
      })
  }

  shouldComponentUpdate() {
    return this.state.atualizaComponet
  }

  RenderFiguraDog = () => {
    return (
      this.state.dogs.map(cachorro => <li key={cachorro.URL}><img src={cachorro.URL} alt='dog' height='150px'></img>{cachorro.nome}</li>)
    )
  }

  destruir = () => {
    this.setState({ destruir: !this.state.destruir })
  }


  render() {
    console.log(this.state);
    let renderDog = '';
    if (!this.state.destruir) renderDog = <Dog cachorros={this.state.dogs} destruir={this.state.destruir} />
    return (
      <div className="App" >
        <button type='button' onClick={this.criarDog}>Doguitos</button>
        <button type='button' onClick={this.destruir}>Salvar no Storage</button>
        <input onChange={this.inputHandler} />
        {renderDog}
      </div >
    );
  }
}

export default App;
