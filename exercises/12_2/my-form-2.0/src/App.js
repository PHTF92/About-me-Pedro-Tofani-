import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      nome: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      curriculo: '',
      cargo: '',
      descricao: '',
      formErrors: { email: '', password: '' }
    }
  }
  changeHandler = event => {
    const { name, value } = event.target;
    this.setState((state) => {
      return ({
        [name]: value
      })
    })
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <fieldset>
          <legend>Formulário</legend>
          <div>Nome <input
            type='text'
            name='nome'
            value={this.state.nome}
            onChange={this.changeHandler}
          /></div>
          <div>E-mail <input
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.changeHandler}
          /></div>
          <div>CPF <input
            type='number'
            name='cpf'
            value={this.state.cpf}
            onChange={this.changeHandler}
          /></div>
          <div>Endereço <input
            type='text'
            name='endereco'
            value={this.state.endereco}
            onChange={this.changeHandler}
          /></div>
          <div>Cidade <input
            type='text'
            name='cidade'
            value={this.state.cidade}
            onChange={this.changeHandler}
          /></div>
          <div>Estado</div>
          <div></div>
        </fieldset>
        <fieldset>
          <legend>Informações profissionais</legend>
          <div>Resumo do currículo <textarea></textarea></div>
          <div>Cargo <textarea></textarea></div>
          <div>Descrição do cargo <textarea></textarea></div>
        </fieldset>
        <button>Submeter!</button><br></br>
        <button>Limpar</button>
      </div>
    );
  }
}

export default App;
